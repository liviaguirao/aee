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

    <div className='container'>
      <Navbar />
      <div className='containerPreVisual'>
        <div className='textoPreVisual'>
          <div className='publicacao'>
            {imagem ? (
              <img src={imagem} alt="Imagem selecionada" style={{ maxWidth: '80%', maxHeight: '80%', borderRadius: '1rem' }} />
            ) : (
              <p>Nenhuma imagem foi anexada</p>
            )}
            <p className="texto-formatado">{texto}</p>
          </div>


        </div>
        <div className='botoes'>
          <div className='botoes1'>
            <Button text="Publicar" className="button-publicar" />
          </div>
          <div className='botoes1'>
            <Button text="Voltar" onClick={handleFilterClick_cancelar} className="button-cancelar-pre" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Pre_visual
