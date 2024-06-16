import { useNavigate } from 'react-router-dom'
import './App.css'
import './Style.css'

function Filtro_evento() {
    const navigate = useNavigate();

    function handleFilterClick_criar() {
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
        text="Finalizar"
        onClick={handleFilterClick_criar}
        className={ 'button-finalizar'}
      />
      <div style={{width: 356, height: 41, left: 192, top: 56, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
      <div style={{width: 356, height: 41, left: 192, top: 276, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
      <div style={{width: 356, height: 41, left: 192, top: 327, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
      <div style={{width: 356, height: 41, left: 192, top: 378, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
      <div style={{width: 356, height: 41, left: 192, top: 429, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
      <div style={{left: 208, top: 59, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>tipo de eventos</div>
      <div style={{left: 208, top: 280, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>país</div>
      <div style={{left: 208, top: 329, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>estado</div>
      <div style={{left: 208, top: 382, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>cidade</div>
      <div style={{left: 208, top: 433, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>gênero</div>
      <div style={{width: 24, height: 24, left: 532, top: 90, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0'}}>
        <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
      </div>
      <div style={{width: 24, height: 24, left: 520, top: 388, position: 'absolute'}}>
        <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
      </div>
      <div style={{width: 24, height: 24, left: 520, top: 440, position: 'absolute'}}>
        <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
      </div>
      <div style={{width: 356, height: 41, left: 192, top: 482, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
      <div style={{left: 208, top: 483, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>Data</div>
      <div style={{width: 24, height: 24, left: 520, top: 487, position: 'absolute'}}>
        <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
      </div>
      <div style={{width: 24, height: 24, left: 520, top: 284, position: 'absolute'}}>
        <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
      </div>
      <div style={{width: 24, height: 24, left: 520, top: 336, position: 'absolute'}}>
        <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
      </div>
      <div style={{width: 21, height: 21, left: 207, top: 117, position: 'absolute', background: '#D9D9D9'}} />
      <div style={{width: 12, height: 16, left: 212, top: 122, position: 'absolute', color: '#820B8A', fontSize: 20, fontFamily: 'Manjari', fontWeight: '700', textTransform: 'lowercase', wordWrap: 'break-word'}}>x</div>
      <div style={{width: 21, height: 21, left: 207, top: 148, position: 'absolute', background: '#D9D9D9'}} />
      <div style={{width: 21, height: 21, left: 207, top: 179, position: 'absolute', background: '#D9D9D9'}} />
      <div style={{width: 21, height: 21, left: 207, top: 210, position: 'absolute', background: '#D9D9D9'}} />
      <div style={{width: 21, height: 21, left: 207, top: 244, position: 'absolute', background: '#D9D9D9'}} />
      <div style={{width: 87, height: 18, left: 237, top: 119, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>musical</div>
      <div style={{width: 87, height: 18, left: 237, top: 150, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>teatro</div>
      <div style={{width: 152, height: 18, left: 237, top: 181, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>DANÇA</div>
      <div style={{width: 152, height: 18, left: 236, top: 212, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>cultural</div>
      <div style={{width: 152, height: 18, left: 237, top: 246, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>humorístico</div>
    </div>
    </>  
  )
}

export default Filtro_evento
