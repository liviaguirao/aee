import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Style.css'
import Navbar from '../components/navbar';

function Sel_filtros() {
  const location = useLocation();
  const data = location.state?.data;
  console.log("ola perfil: " + data.cidade);
  const navigate = useNavigate();

  function handleFilterClick_artista() {
    navigate('/pagina-inicial/criar-publicação/filtros/filtro_artista', { state: { data: data } });
  }

  function handleFilterClick_evento() {
    navigate('/pagina-inicial/criar-publicação/filtros/filtro_evento', { state: { data: data } });
  }

  function handleFilterClick_voltar() {
    navigate('/pagina-inicial/criar-publicação', { state: { data: data } });
  }

  return (
    <div className='container'>
      <Navbar filtroSelecionado={null} datas={data} />
      <div className='texto_sel'>
        <div className='textopergunta'> Você é um artista ou um evento? </div>
        <div className='botoes3'>
          <div className='botoes2'>
            <button onClick={handleFilterClick_artista} className="button-artista"> Artista</button>
            <button onClick={handleFilterClick_evento} className="button-evento" >Evento</button>
          </div>
          <div className='botoes2'>
            <button onClick={handleFilterClick_voltar}>Voltar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sel_filtros
