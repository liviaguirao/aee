package br.com.modelagem.Modelagem.controller;

import java.util.Collections;
import java.util.List;
import br.com.modelagem.Modelagem.DAO.IPost;
import br.com.modelagem.Modelagem.entity.Post;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Postcontroller
 */
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class Postcontroller {

    private static String UPLOADED_FOLDER = "../../public/assets/";
    private static String UPLOADED_FOLDERst = "C:/Users/Livia/Desktop/TrabModelagem/BancoPLivia/src/main/resources/static/front-end/public/assets/";

    @Autowired
    private IPost dao;

    @GetMapping("/posts")
    public List<Post> allPosts() {
        return (List<Post>) dao.findAll();

    }

    @GetMapping("/posta")
    public List<Post> allPostsa() {
        List<Post> posts = (List<Post>) dao.findAll(); // Busca todos os posts
        Collections.reverse(posts); // Inverte a ordem dos posts
        return posts;
    }

    @PostMapping("/criarP")
    public ResponseEntity<Post> handleFileUpload(

    
            @RequestParam("usuario") Integer usuario,
            @RequestParam("conteudo") String conteudo,
            @RequestParam(value = "imgPost", required = false) MultipartFile imgPost) {
    
       
    
        try {
            System.out.println("debug: criando post");
    
            // Criar a pasta assets, se não existir
            File assetsDir = new File(UPLOADED_FOLDERst);
            if (!assetsDir.exists()) {
                assetsDir.mkdirs();
                System.out.println("debug: Criando Pasta");
            }
    
            // Salvar imagem do post, se fornecida
            String capaFilename = null;
            if (imgPost != null && !imgPost.isEmpty()) {
                capaFilename = saveFile(imgPost);
                System.out.println("Nome do arquivo: " + imgPost.getOriginalFilename());
            }
    
            // Inicializar o objeto Post corretamente
            Post savPost = new Post();
            savPost.setUsuario(usuario);
            savPost.setConteudo(conteudo);
    
            if (imgPost != null && !imgPost.isEmpty()) {
                savPost.setImgPost(UPLOADED_FOLDER + capaFilename);
            }
    
            // Salvar o Post
            dao.save(savPost);
            return ResponseEntity.status(HttpStatus.OK).body(savPost);
    
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
        }
    }
    


    // Método para salvar o arquivo em disco
    private String saveFile(MultipartFile file) throws IOException {
        // Obter o nome do arquivo original
        try {
            String originalFilename = file.getOriginalFilename();

            // Criar caminho completo para salvar o arquivo
            Path path = Paths.get(UPLOADED_FOLDERst + originalFilename);

            // Salvar o arquivo no disco
            Files.write(path, file.getBytes());
            System.out.println("criando : " + path);

            return originalFilename;
        } catch (IOException e) {
            e.printStackTrace();
            throw new IOException("Erro ao salvar o arquivo.");
        }
    }

}