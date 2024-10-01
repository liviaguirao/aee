package br.com.modelagem.Modelagem.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "usuario", nullable = true)
    private Integer usuario;
    @Column(name = "conteudo", length = 255, nullable = true)
    private String conteudo = " ";
    @Column(name = "likes")
    private Integer likes = 0;
    @Column(name = "imgpost", length = 255)
    private String imgPost = "../assets/Postd.png";

    public String getImgPost() {
        return imgPost;
    }

    public void setImgPost(String imgPost) {
        this.imgPost = imgPost;
    }

    public String getConteudo() {
        return conteudo;
    }

    public Integer getId() {
        return id;
    }

    public Integer getLikes() {
        return likes;
    }

    public Integer getUsuario() {
        return usuario;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public void setLikes(Integer likes) {
    }

    public void setUsuario(Integer usuario) {
        this.usuario = usuario;
    }

}
