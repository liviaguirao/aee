import { useState, useEffect } from "react";
import styles from "../styles/Perfil.module.css";
import EditPerfil from "./EditPerfil";
import Navbar from '../components/navbar';
import { useLocation } from "react-router-dom";
import AgendaVisivel from '../components/AgendaVisivel';
import Publicacao from '../components/publicacao';

function Perfil() {
  const location = useLocation();
  const data = location.state?.data;


  // Mapeia postData para publicacoes
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  // Chamada para obter dados do usuário
  useEffect(() => {
    fetch('http://localhost:8080/user', { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao recuperar dados');
        }
        return response.json();
      })
      .then(datap => {
        console.log(datap);
        setUserData(datap);
        // Armazenando os dados no estado
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  // Chamada para obter postagens
  useEffect(() => {
    fetch('http://localhost:8080/posts', { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao recuperar dados');
        }
        return response.json();
      })
      .then(datapost => {
        setPostData(datapost); // Armazenando os dados no estado
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);
  const [publicacoes, setPublicacoes] = useState([]);
  useEffect(() => {
    const publis = [];


    for (const post of postData) {
      console.log('Verificando post ${ post.id } do usuário ${ data.idUser }'); // Adiciona um console log para verificar quais posts estão sendo verificados
  // Verifica se o ID do usuário no post corresponde ao ID do usuário
  if (post.usuario === data.idUser) {
    console.log('Post ${ post.id } pertence ao usuário ${ data.idUser }'); // Adiciona um console log para verificar se o post pertence ao usuário
    // Se o nome do usuário for nulo, adiciona uma publicação com nome e foto padrão

    if (data.nome == null) {
      publis.push({
        id: post.id,
        Nomeusuario: data.identificador, // Adiciona um nome padrão
        fotodeperfil: data.imgPerfil, // Foto do perfil do usuário
        conteudo: post.conteudo, // Conteúdo do post
        imagem: post.imgPost // Imagem do post
      });
    } else {
      // Caso o nome do usuário exista
      publis.push({
        id: post.id,
        usuario: data.idUser,
        Nomeusuario: data.nome, // Nome real do usuário
        fotodeperfil: data.imgPerfil, // Foto do perfil do usuário
        conteudo: post.conteudo, // Conteúdo do post
        imagem: post.imgPost // Imagem do post
      });
    }
  }

}

setPublicacoes(publis); // Atualiza o estado com as publicações formatadas
  }, [postData]); // Adiciona userData e postData como dependências




const [showEditPerfil, setShowEditPerfil] = useState(false);

const [showPublication, setShowPublication] = useState(true);
const [showCalendary, setShowCalendary] = useState(false);


function toggleEditPerfil() {
  setShowEditPerfil(!showEditPerfil);
}

function togglePublication() {
  setShowPublication(true);
  setShowCalendary(false);
}

function toggleCalendary() {
  setShowCalendary(true);
  setShowPublication(false);
}

return (
  <header>
    <Navbar filtroSelecionado={null} datas={data} />
    <div className={styles.conteudo}>

      <div className={styles.container1}>

        <img className={styles.perfil_pic} src={data.imgPerfil} alt="IMGperfil" />
        <img
          className={styles.perfil_background}
          src={data.imgCapa}
          alt="Capa"
        />
        <button className={styles.btn_edit} onClick={toggleEditPerfil}>
          {!showEditPerfil ? "EDITAR PERFIL" : "FECHAR"}
        </button>
      </div>
      {console.log(showEditPerfil)}
      {!showEditPerfil ? (
        <>
          <div className={styles.container}>
            <div className={styles.div1}>
              <ul className={styles.list}>
                <li>
                  <div className={styles.span}>Nome:</div>
                  <p>{data.nome}</p>
                </li>
                <li>
                  <div className={styles.span}>Telefone:</div>
                  <p>{data.telefone}</p>
                </li>
                <li>
                  <div className={styles.span}>Cidade:</div>
                  <p>{data.cidade}</p>
                </li>
                <li>
                  <div className={styles.span}>Arte:</div>
                  <p>{data.ocupacao}</p>
                </li>
              </ul>

            </div>
            <div className={styles.div2}>
              <span>SOBRE</span>
              <p>{data.bio}</p>
            </div>
          </div>
          <div className={styles.botoes} >
            <button className={styles.btn_pub} onClick={togglePublication}>PUBLICAÇÕES</button>
            <button className={styles.btn_calendary} onClick={toggleCalendary}>AGENDA</button>
          </div>
          <div className={styles.mutavel}>
            {showPublication &&
              <div className={styles.publicacoes}>
                {publicacoes.map((publis) => (
                  <Publicacao
                    key={publis.id}
                    Nomeusuario={publis.Nomeusuario}
                    fotodeperfil={publis.fotodeperfil}
                    usuario={publis.usuario}
                    conteudo={publis.conteudo}
                    imagem={publis.imagem}
                  />
                ))}
              </div>}
            {showCalendary && <AgendaVisivel />}
          </div>
        </>
      ) : (


        <EditPerfil
          data={data}
          setShowEditPerfil={setShowEditPerfil}
        />
      )}
    </div>
  </header>
);
}

export default Perfil;