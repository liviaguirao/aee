import { useNavigate } from 'react-router-dom'
import './App.css'

function Filtro_artista() {
    const navigate = useNavigate();

    function handleFilterClick_criar() {
      navigate('/'); 
    }

  return (
    <>
      <div style={{width: 1440, height: 653, position: 'relative', background: 'white'}}>
        <div style={{width: 653.03, height: 0, left: 118.25, top: 653.03, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '4px #FF0054 solid'}}></div>
        <div style={{width: 50, height: 50, left: 29, top: 160.03, position: 'absolute', background: 'rgba(255, 84, 0, 0.77)', borderRadius: 15}} />
        <div style={{width: 50, height: 50, left: 29, top: 280.03, position: 'absolute', background: 'rgba(255, 84, 0, 0.77)', borderRadius: 15}} />
        <div style={{width: 50, height: 50, left: 29, top: 220.03, position: 'absolute', background: 'rgba(255, 84, 0, 0.77)', borderRadius: 15}} />
        <div style={{width: 50, height: 50, left: 29, top: 340.03, position: 'absolute', background: 'rgba(255, 84, 0, 0.77)', borderRadius: 15}} />
        <div style={{width: 50, height: 50, left: 30, top: 400.03, position: 'absolute', background: 'rgba(255, 84, 0, 0.77)', borderRadius: 15, border: '2px black solid'}} />
        <div style={{width: 50, height: 50, left: 29, top: 460.03, position: 'absolute', background: 'rgba(255, 84, 0, 0.77)', borderRadius: 15}} />
        <img style={{width: 65, height: 65, left: 23, top: 36.03, position: 'absolute', borderRadius: 9999}} src="https://via.placeholder.com/65x65" />
        <div style={{width: 24.24, height: 24.24, left: 42, top: 233.03, position: 'absolute', background: 'black'}}></div>
        <div style={{width: 29.89, height: 34.85, left: 39, top: 291.03, position: 'absolute'}}>
            <div style={{width: 22.42, height: 21.78, left: 3.74, top: 8.71, position: 'absolute', borderRadius: 2, border: '1px black solid'}} />
            <div style={{width: 22.42, height: 5.81, left: 3.74, top: 8.71, position: 'absolute', background: 'black', borderTopLeftRadius: 2, borderTopRightRadius: 2}} />
            <div style={{width: 4.36, height: 0, left: 8.72, top: 4.36, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
            <div style={{width: 4.36, height: 0, left: 21.17, top: 4.36, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
            <div style={{width: 4.98, height: 2.90, left: 8.72, top: 17.42, position: 'absolute', background: 'black', borderRadius: 0.50}} />
            <div style={{width: 4.98, height: 2.90, left: 8.72, top: 23.23, position: 'absolute', background: 'black', borderRadius: 0.50}} />
            <div style={{width: 4.98, height: 2.90, left: 16.19, top: 17.42, position: 'absolute', background: 'black', borderRadius: 0.50}} />
            <div style={{width: 4.98, height: 2.90, left: 16.19, top: 23.23, position: 'absolute', background: 'black', borderRadius: 0.50}} />
        </div>
        <div style={{width: 23.24, height: 20.33, left: 43, top: 355.03, position: 'absolute', background: 'black'}}></div>
        <div style={{width: 34, height: 34, left: 37, top: 408.03, position: 'absolute'}}>
            <div style={{width: 25.50, height: 25.50, left: 4.25, top: 4.25, position: 'absolute', borderRadius: 4, border: '2px black solid'}}></div>
            <div style={{width: 0, height: 11.33, left: 17, top: 11.33, position: 'absolute', borderRadius: 2, border: '2px black solid'}}></div>
            <div style={{width: 0, height: 11.33, left: 22.67, top: 17, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', borderRadius: 2, border: '2px black solid'}}></div>
        </div>
        <div style={{width: 29, height: 29, left: 39, top: 471.03, position: 'absolute'}}>
            <div style={{width: 9.67, height: 0, left: 6.04, top: 14.50, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', borderRadius: 2, border: '1px #672A4E solid'}}></div>
            <div style={{width: 3.62, height: 0, left: 22.96, top: 24.17, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', borderRadius: 2, border: '1px #672A4E solid'}}></div>
            <div style={{width: 4.83, height: 0, left: 6.04, top: 24.17, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', borderRadius: 2, border: '1px #672A4E solid'}}></div>
            <div style={{width: 10.88, height: 0, left: 22.96, top: 15.71, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', borderRadius: 2, border: '1px #672A4E solid'}}></div>
            <div style={{width: 3.62, height: 0, left: 14.50, top: 8.46, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', borderRadius: 2, border: '1px #672A4E solid'}}></div>
            <div style={{width: 10.88, height: 0, left: 14.50, top: 24.17, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', borderRadius: 2, border: '1px #672A4E solid'}}></div>
            <div style={{width: 4.83, height: 4.83, left: 3.62, top: 14.50, position: 'absolute', borderRadius: 9999, border: '1px #672A4E solid'}} />
            <div style={{width: 4.83, height: 4.83, left: 12.08, top: 8.46, position: 'absolute', borderRadius: 9999, border: '1px #672A4E solid'}} />
            <div style={{width: 4.83, height: 4.83, left: 20.54, top: 15.71, position: 'absolute', borderRadius: 9999, border: '1px #672A4E solid'}} />
        </div>
        <div style={{width: 30.86, height: 27.26, left: 37, top: 170.03, position: 'absolute', background: 'black'}}></div>
        <div style={{width: 48, height: 19, left: 32, top: 608, position: 'absolute'}}>
            <div style={{width: 48, height: 19, left: 0, top: 0, position: 'absolute', background: '#820B8A', borderRadius: 13}} />
            <div style={{width: 48, height: 19, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Manjari', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}}>Sair</div>
        </div>
        <div style={{width: 211, height: 76, left: 937, top: 434, position: 'absolute', background: '#820B8A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '1px black solid'}}></div>
        <div style={{width: 127, height: 29, left: 979, top: 457, position: 'absolute', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={handleFilterClick_criar}>Finalizar</div>
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
