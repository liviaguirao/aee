import { useState, useEffect } from "react";
import styles from "../styles/Perfil.module.css";
import EditPerfil from "./EditPerfil";
import Navbar from '../components/navbar';

function Perfil(info) {
  const [dadosPerfil, setDadosPerfil] = useState(info);

  useEffect(() => {
    setDadosPerfil(info);
  }, []);

  const [name, setName] = useState(dadosPerfil.name);
  const [age, setAge] = useState(dadosPerfil.age);
  const [city, setCity] = useState(dadosPerfil.city);
  const [art, setArt] = useState(dadosPerfil.art);
  const [bio, setBio] = useState(dadosPerfil.bio);
  const [fotoPerfil, setfotoPerfil] = useState(dadosPerfil.fotoperfil);
  const [fotoCapa, setfotoCapa] = useState(dadosPerfil.fotocapa);

  function update() {
    const newDados = [name, age, city, art];
    setDadosPerfil(newDados);
  }

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
        <Navbar />
        <div className={styles.conteudo}>

          <div className={styles.container1}>

            <img className={styles.perfil_pic} src={'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRvJTIwcGVyZmlsfGVufDB8fDB8fHww'} alt="img_perfil" />
            <img
              className={styles.perfil_background}
              src={'data:image/jpeg;base64,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'}
              alt="img_perfil"
            />
            <button className={styles.btn_edit} onClick={toggleEditPerfil}>
              {!showEditPerfil ? "EDITAR PERFIL" : "FECHAR"}
            </button>
          </div>
          {!showEditPerfil ? (
            <>
              <div className={styles.container}>
                <div className={styles.div1}>
                  <ul className={styles.list}>
                    <li>
                      <div className={styles.span}>Nome:</div>
                      <p>{info.name}</p>
                    </li>
                    <li>
                      <div className={styles.span}>telefone:</div>
                      <p>{info.age}</p>
                    </li>
                    <li>
                      <div className={styles.span}>Cidade:</div>
                      <p>{info.city}</p>
                    </li>
                    <li>
                      <div className={styles.span}>Arte:</div>
                      <p>{info.art}</p>
                    </li>
                  </ul>

                </div>
                <div className={styles.div2}>
                  <span>SOBRE</span>
                  <p>{info.bio}</p>
                </div>
              </div>
              <div className={styles.botoes} >
                <button className={styles.btn_pub} onClick={togglePublication}>PUBLICAÇÕES</button>
                <button className={styles.btn_calendary} onClick={toggleCalendary}>AGENDA</button>
              </div>
              <div  className={styles.mutavel}>
                {showPublication &&  <div>Seção de Agenda</div>}
                {showCalendary && <div>Seção de Agenda</div>}
              </div>
            </>
          ) : (
            <EditPerfil
              info={dadosPerfil}
              setName={setName}
              setAge={setAge}
              setCity={setCity}
              setArt={setArt}
              setBio={setBio}
              setfotoPerfil={setfotoPerfil}
              setfotoCapa={setfotoCapa}
              update={update}
            />
          )}
        </div>
      </header>
  );
}

export default Perfil;
