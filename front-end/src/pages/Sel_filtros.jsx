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
    <div className='container'>
      <Navbar />
      <div className='texto_sel'>
        <div style={{ fontSize: '3rem', height: '15%', marginTop: '10%' }}> Você é um artista ou um evento? </div>
        <div className='botoes3'>
          <div className='botoes2'>
            <Button text="Artista" onClick={handleFilterClick_artista} className="button-artista" />
            <Button text="Evento" onClick={handleFilterClick_evento} className="button-evento" />
          </div>
          <div style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <div className='botoes2'>
              <button onClick={handleFilterClick_voltar}>Voltar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sel_filtros
