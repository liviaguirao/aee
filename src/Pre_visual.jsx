import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import './App.css'
import './Style.css'

function Pre_visual() {
    const navigate = useNavigate();
    const location = useLocation();
    const texto = location.state?.texto;

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
      <div style={{width: 1440, height: 653, position: 'relative', background: 'white'}}>
      
      <Button
          text="Sair"
          // onClick={handleSairClick} // Substitua handleSairClick pela função que lida com o clique do botão
          className="button-sair"
      />
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
      <div style={{width: 698, height: 537, left: 237, top: 51, position: 'absolute'}}>
        <div style={{width: 698, height: 537, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 17, border: '2px #820B8A solid'}} />
        <div style={{width: 255.19, height: 26.24, left: 10.09, top: 491.58, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}></div>
        <div style={{width: 670, height: 1, left: 10, top: 480, position: 'absolute', textAlign: 'left', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>
          <p>
            {texto}
          </p>
        </div>
        <img style={{width: 62.54, height: 62.58, left: 10.09, top: 5.05, position: 'absolute', borderRadius: 9999}} src="https://via.placeholder.com/63x63" />
        <img style={{width: 693.97, height: 401.74, left: 2.02, top: 78.73, position: 'absolute', borderRadius: 17}} src="https://via.placeholder.com/694x402" />
      </div>
    </div>
    </>
  )
}

export default Pre_visual
