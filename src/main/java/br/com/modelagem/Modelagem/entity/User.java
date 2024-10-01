package br.com.modelagem.Modelagem.entity;

/**
 * User
 */

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuarios")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Iduser")
    private int IDUser;

    @Column(name = "identificador", length = 255, nullable = true)
    private String identificador;

    @Column(name = "Telefone", length = 20)
    private String Telefone;

    @Column(name = "Senha", length = 255, nullable = true)
    private String Senha;

    @Column(name = "Nome", length = 255)
    private String Nome;

    @Column(name = "Email", length = 255, nullable = true)
    private String Email;

    @Column(name = "ocupacao", length = 255)
    private String Ocupacao;

    @Column(name = "Cidade", length = 20)
    private String Cidade = "Juiz de Fora";

    public void setCidade(String cidade) {
        Cidade = cidade;
    }

    @Column(name = "Bio", length = 255)
    private String Bio;

    @Column(name = "Icone", length = 255)
    private String Icone = "../../public/assets/ftuser.png";

    @Column(name = "Capa", length = 255)
    private String Capa = "'../../public/assets/capadefault.png";

    // getters
    public int getIdUser() {
        return IDUser;
    }

    public String getCidade() {
        return Cidade;
    }

    public String getidentificador() {
        return identificador;
    }

    public String getSenha() {
        return Senha;
    }

    public String getNome() {
        return Nome;
    }

    public String getTelefone() {
        return Telefone;
    }

    public String getEmail() {
        return Email;
    }

    public String getBio() {
        return Bio;
    }

    public String getImgPerfil() {
        return Icone;
    }

    public String getImgCapa() {
        return Capa;
    }

    public String getOcupacao() {
        return Ocupacao;
    }
    // setters

    public void setIdUser(int idUser) {
        this.IDUser = idUser;
    }

    public void setidentificador(String idf) {
        identificador = idf;
    }

    public void setSenha(String senha) {
        this.Senha = senha;
    }

    public void setNome(String nome) {
        this.Nome = nome;
    }

    public void setTelefone(String telefone) {
        this.Telefone = telefone;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public void setBio(String bio) {
        this.Bio = bio;
    }

    public void setImgPerfil(String imgPerfil) {
        this.Icone = imgPerfil;
    }

    public void setImgCapa(String imgCapa) {
        this.Capa = imgCapa;
    }

    public void setOcupacao(String ocupacao) {
        Ocupacao = ocupacao;
    }

}
