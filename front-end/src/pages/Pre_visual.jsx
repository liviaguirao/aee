import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import '../styles/App.css'
import '../styles/Style.css'
import Navbar from '../components/navbar';

function Pre_visual() {
    const navigate = useNavigate();
    const location = useLocation();
    const { texto, imagem } = location.state || {}; // Recupera o texto e a imagem do estado

    function handleFilterClick_cancelar() {
      navigate('/'); 
    }

    const Button = ({ text, onClick, style, className }) => {
      return (
        <div className={`button-base ${className}`} style={{ ...style }} onClick={onClick}>
          {text}
        </div>
      );
    };

  return (
    <>
      <div style={{width: '100vw', height: '100vh', position: 'relative', background: 'white'}}>
        <Navbar />
      <Button
          text="Cancelar"
          onClick={handleFilterClick_cancelar}
          className="button-cancelar-pre"
      />
      <Button
          text="Publicar"
          // onClick={handlePublicarClick} // Substitua handlePublicarClick pela função que lida com o clique do botão
          className="button-publicar"
      />
      <div style={{width: '52.5vw', height: '85vh', left: '20vw', top: '10vh', position: 'absolute'}}>
        <div style={{width: '52.5vw', height: '85vh', left: '0vw', top: '0vh', position: 'absolute', background: 'white', borderRadius: '3vh', border: '0.5vh #820B8A solid'}} />
        <div style={{width: '50vw', height: '1vh', left: '1vw', top: '71vh', position: 'absolute', textAlign: 'left', color: 'black', fontSize: '150%', fontFamily: 'Inter', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>
          <p>
            {texto}
          </p>
        </div>
        <img style={{width: '4.5vw', height: '9vh', left: '0.8vw', top: '0.8vh', position: 'absolute', borderRadius: '100vh'}} src="https://via.placeholder.com/63x63" />
        {imagem && <img src={imagem} alt="Imagem selecionada" style={{position: 'absolute', zIndex: 1000, width: '52.59vw', height: '62vh', left: '0.2vw', top: '13vh'}} />}
      </div>
    </div>
    </>
  )
}

export default Pre_visual
