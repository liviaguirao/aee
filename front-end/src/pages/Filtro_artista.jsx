import { useNavigate } from 'react-router-dom'
import '../styles/App.css'
import '../styles/Style.css'


function Filtro_artista() {
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
        <div style={{width: 356, height: 41, left: 192, top: 304, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
        <div style={{width: 356, height: 41, left: 192, top: 355, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
        <div style={{width: 356, height: 41, left: 192, top: 406, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
        <div style={{width: 356, height: 41, left: 192, top: 457, position: 'absolute', background: 'rgba(255, 0, 84, 0.19)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.21)', borderRadius: 16}} />
        <div style={{left: 208, top: 59, position: 'absolute', textAlign: 'right', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>tipo de artista</div>
        <div style={{left: 208, top: 308, position: 'absolute', textAlign: 'right', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>país</div>
        <div style={{left: 208, top: 358, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>estado</div>
        <div style={{left: 208, top: 410, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>cidade</div>
        <div style={{left: 208, top: 460, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 24, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>gênero</div>
        <div style={{width: 24, height: 24, left: 532, top: 90, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0'}}>
            <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
        </div>
        <div style={{width: 24, height: 24, left: 520, top: 416, position: 'absolute'}}>
            <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
        </div>
        <div style={{width: 24, height: 24, left: 520, top: 468, position: 'absolute'}}>
            <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
        </div>
        <div style={{width: 24, height: 24, left: 520, top: 312, position: 'absolute'}}>
            <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
        </div>
        <div style={{width: 24, height: 24, left: 520, top: 364, position: 'absolute'}}>
            <div style={{width: 6, height: 12, left: 18, top: 15, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #672A4E solid'}}></div>
        </div>
        <div style={{width: 21, height: 21, left: 207, top: 117, position: 'absolute', background: '#D9D9D9'}} />
        <div style={{width: 12, height: 16, left: 212, top: 122, position: 'absolute', color: '#820B8A', fontSize: 20, fontFamily: 'Manjari', fontWeight: '700', textTransform: 'lowercase', wordWrap: 'break-word'}}>x</div>
        <div style={{width: 21, height: 21, left: 207, top: 148, position: 'absolute', background: '#D9D9D9'}} />
        <div style={{width: 21, height: 21, left: 207, top: 179, position: 'absolute', background: '#D9D9D9'}} />
        <div style={{width: 21, height: 21, left: 207, top: 210, position: 'absolute', background: '#D9D9D9'}} />
        <div style={{width: 21, height: 21, left: 207, top: 241, position: 'absolute', background: '#D9D9D9'}} />
        <div style={{width: 21, height: 21, left: 207, top: 272, position: 'absolute', background: '#D9D9D9'}} />
        <div style={{width: 87, height: 18, left: 237, top: 119, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>CANTOR</div>
        <div style={{width: 87, height: 18, left: 237, top: 150, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>ATOR</div>
        <div style={{width: 152, height: 18, left: 237, top: 181, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>DANÇARINO</div>
        <div style={{width: 152, height: 18, left: 236, top: 212, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>músico</div>
        <div style={{width: 152, height: 18, left: 237, top: 243, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>artista plástico</div>
        <div style={{width: 152, height: 18, left: 237, top: 274, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Manjari', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word'}}>HUMORISTA</div>
        </div>
    </>
  )
}

export default Filtro_artista
