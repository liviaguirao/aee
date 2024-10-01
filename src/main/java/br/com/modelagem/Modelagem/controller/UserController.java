package br.com.modelagem.Modelagem.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.modelagem.Modelagem.DAO.UserRepository;
import br.com.modelagem.Modelagem.entity.User;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

public class UserController {
    private static String UPLOADED_FOLDER = "../../public/assets/";
    private static String UPLOADED_FOLDERst = "C:/Users/Livia/Desktop/TrabModelagem/BancoPLivia/src/main/resources/static/front-end/public/assets/";
    User texte;

    @Autowired
    private UserRepository dao;

    // output all users

    @GetMapping("/user")
    public ResponseEntity<List<User>> listUsers() {
        List<User> lista = (List<User>) dao.findAll();
        return ResponseEntity.status(200).body(lista);
    }

    @GetMapping("/userlast")
    public ResponseEntity<List<User>> listLastUsers() {
        List<User> lista = (List<User>) dao.findAll();
        // Verifique se a lista tem menos de 5 elementos para evitar
        // IndexOutOfBoundsException
        int fromIndex = Math.max(0, lista.size() - 5);
        List<User> lastUsers = lista.subList(fromIndex, lista.size());
        return ResponseEntity.status(200).body(lastUsers);
    }

    @GetMapping("/last")
    public ResponseEntity<List<User>> listcontraUsers() {
        List<User> lista = (List<User>) dao.findAll();

        // Verifique se a lista não está vazia
        if (lista.isEmpty()) {
            return ResponseEntity.noContent().build(); // Retorna 204 No Content se não houver usuários
        }

        // Inverte a lista
        Collections.reverse(lista);

        // Limita a lista para os últimos 5 usuários
        List<User> lastFiveUsers = lista.stream().limit(5).collect(Collectors.toList());

        return ResponseEntity.ok(lastFiveUsers); // Retorna 200 OK com os últimos 5 usuários
    }

    
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Map<String, String> loginData) {
        List<User> lista = (List<User>) dao.findAll();

        // Criação das variáveis email e senha
        String email = loginData.get("email");
        String senha = loginData.get("senha");

        System.out.println(email);
        System.out.println(senha);

        for (User user : lista) {
            if (email.equals(user.getEmail()) && senha.equals(user.getSenha())) {
                // Retornar todos os detalhes do usuário exista
                System.out.println("encontrado");
                return ResponseEntity.status(HttpStatus.OK).body(user);
            }
        }
        System.out.println("nao encontrado");
        // Caso o usuário não seja encontrado, retornar status 404
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    // recebe
    @PostMapping("/criar-conta")
    public ResponseEntity<User> criarNovo(@RequestBody User user) {
        User novoUser = dao.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoUser);
    }

    @PostMapping("/profile")
    public ResponseEntity<User> handleFileUpload(

            @RequestParam("idUser") int idUser,
            @RequestParam("nome") String nome,
            @RequestParam("telefone") String telefone,
            @RequestParam("cidade") String cidade,
            @RequestParam("ocupacao") String ocupacao,
            @RequestParam("bio") String bio,
            @RequestParam(value = "fotoPerfil", required = false) MultipartFile fotoPerfil,
            @RequestParam(value = "fotoCapa", required = false) MultipartFile fotoCapa) {
        System.out.println("caminho imagem perfil: " + "fotoPerfil");
        try {
            System.out.println("caminho imagem perfil: " + "fotoPerfil");
            System.out.println("caminho imagem perfil: " + fotoPerfil);
            // Criar a pasta assets, se não existir

            File assetsDir = new File(UPLOADED_FOLDERst);
            if (!assetsDir.exists()) {
                assetsDir.mkdirs();
                System.out.println("Criando Pasta");
            }

            // Salvar imagem de perfil, se fornecida
            String perfilFilename = null;
            if (fotoPerfil != null && !fotoPerfil.isEmpty()) {
                System.out.println("tem ft aki em");
                System.out.println("Nome do arquivo de perfil: " + fotoPerfil.getOriginalFilename());
                perfilFilename = saveFile(fotoPerfil);
            }

            // Salvar imagem de capa, se fornecida
            String capaFilename = null;
            if (fotoCapa != null && !fotoCapa.isEmpty()) {
                capaFilename = saveFile(fotoCapa);
                System.out.println("Nome do arquivo de perfil: " + fotoCapa.getOriginalFilename());
            }
                User savUser = null;
            // Buscar o usuário no banco de dados
            List<User> lista = (List<User>) dao.findAll();
            for (User user2 : lista) {
                if (user2.getIdUser() == idUser) {

                    user2.setNome(nome);
                    user2.setTelefone(telefone);
                    user2.setCidade(cidade);
                    user2.setOcupacao(ocupacao);
                    user2.setBio(bio);
                    if (fotoPerfil != null && !fotoPerfil.isEmpty()) {
                        user2.setImgPerfil(UPLOADED_FOLDER + perfilFilename);
                    }
                    if (fotoCapa != null && !fotoCapa.isEmpty()) {
                        user2.setImgCapa(UPLOADED_FOLDER + capaFilename);
                    }
                    dao.save(user2);
                    savUser=user2;

                }
            }

            return ResponseEntity.status(HttpStatus.OK).body(savUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
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
        } catch(IOException e) {
            e.printStackTrace();
            throw new IOException("Erro ao salvar o arquivo.");
        }
    }

}