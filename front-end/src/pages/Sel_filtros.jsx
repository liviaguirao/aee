import { useNavigate } from 'react-router-dom'
import './App.css'
import './Style.css'

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
      <div style={{width: 1440, height: 653, position: 'relative', background: 'white'}}>
        <Button
          text="Sair"
          // onClick={handleSairClick} // Substitua handleSairClick pela função que lida com o clique do botão
          className="button-sair"
        />
        <div style={{left: 279, top: 67, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 60, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>Você é um artista ou um evento?</div>
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
