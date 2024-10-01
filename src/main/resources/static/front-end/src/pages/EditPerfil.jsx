import { useState } from "react";
import styles from "../styles/EditPerfil.module.css";
import { useNavigate } from 'react-router-dom';

function EditPerfil({ data, setShowEditPerfil }) {
  const navigate = useNavigate(); // Hook para navegação
  const [name, setName] = useState(data.nome);
  const [telefone, settelefone] = useState(data.telefone);
  const [city, setCity] = useState(data.cidade);
  const [ocupacao, setocupacao] = useState(data.ocupacao);
  const [bio, setBio] = useState(data.bio);
  const [fotoPerfil, setfotoPerfil] = useState(data.imgPerfil); // Alterado para receber o novo arquivo
  const [fotoCapa, setfotoCapa] = useState(data.imgCapa); // Alterado para receber o novo arquivo

  const handleSubmit = (event) => {
    event.preventDefault();

    // Criar FormData para lidar com o upload dos arquivos
    console.log(data.idUser);
    console.log(data.imgPerfil);
    console.log(data.imgCapa);

    const formData = new FormData();
    formData.append("idUser", data.idUser);
    formData.append("nome", name);
    formData.append("telefone", telefone);
    formData.append("cidade", city);
    formData.append("ocupacao", ocupacao);
    formData.append("bio", bio);
    

    // Adiciona os arquivos, se selecionados
    if (fotoPerfil) {
      formData.append("fotoPerfil", fotoPerfil);
    }
    if (fotoCapa) {
      formData.append("fotoCapa", fotoCapa);
    }

    fetch('http://localhost:8080/profile', {
      method: 'POST',
      body: formData, // Usando FormData para lidar com arquivos e dados
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('erro');
      }
      return response.json();
    })
      .then(data => {

        console.log("ola Novos dados: ")
        console.log('Sucesso:', data);
        setShowEditPerfil(false);
        navigate('/pagina-inicial/perfil', { state: { data: data } }) // Redireciona após o sucesso
        
      })
      .catch(error => {
        console.error('Nao foi possivel salvar os dados:', error);
      });
  };

  return (
    <div className={styles.contineredit}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          placeholder={data.nome || "Nome"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="number"
          placeholder={data.telefone || "Telefone"}
          value={telefone}
          onChange={(e) => settelefone(e.target.value)}
        />

        <label htmlFor="city">Cidade:</label>
        <input
          type="text"
          placeholder={data.cidade || "Cidade"}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="ocupacao">Ocupação:</label>
        <input
          type="text"
          placeholder={data.ocupacao || "Ocupação"}
          value={ocupacao}
          onChange={(e) => setocupacao(e.target.value)}
        />

        <label htmlFor="bio">Biografia:</label>
        <textarea
          className={styles.textarea}
          rows="10"
          placeholder={data.bio || "Bio"}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        {/* Input para a Foto de Perfil */}
        <label htmlFor="profile-picture">Foto de perfil:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setfotoPerfil(e.target.files[0])}
        />

        {/* Input para a Foto de Capa */}
        <label htmlFor="cover-photo">Foto de imgCapa:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setfotoCapa(e.target.files[0])}
        />

        <div className={styles.ContainersubmitButton}>
          <input className={styles.submitButton} type="submit" value="Salvar mudanças" />
        </div>
      </form>
    </div>
  );
}

export default EditPerfil;