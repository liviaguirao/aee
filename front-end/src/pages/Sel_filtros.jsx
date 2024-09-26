import { useNavigate } from 'react-router-dom'
import '../styles/App.css'
import '../styles/Style.css'
import Navbar from '../components/navbar';

function Sel_filtros() {
  const navigate = useNavigate();

  function handleFilterClick_artista() {
    navigate('/filtro_artista'); 
  }

  function handleFilterClick_evento() {
    navigate('/filtro_evento'); 
  }

  function handleFilterClick_voltar() {
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
        <div style={{left: '23vw', top: '10vh', position: 'absolute', textAlign: 'center', color: 'black', fontSize: '400%', fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>Você é um artista ou um evento?</div>
        <Button
          text="Artista"
          onClick={handleFilterClick_artista}
          className="button-artista"
        />
        <Button 
          text="Evento"
          onClick={handleFilterClick_evento}
          className={ 'button-evento'}
        />
        <Button
          text="Voltar"
          onClick={handleFilterClick_voltar}
          className="button-voltar"
        />
        </div>
    </>
  )
}

export default Sel_filtros