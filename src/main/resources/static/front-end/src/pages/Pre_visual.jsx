import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import '../styles/Style.css'
import Navbar from '../components/navbar';

function Pre_visual() {
  const location = useLocation();
  const data = location.state?.data;
  const texto = location.state?.texto;
  const imagem = location.state?.imagem;
  
  const navigate = useNavigate();


  function handleFilterClick_cancelar() {
    navigate('/pagina-inicial/criar-publicação/', { state: { data: data } });
  }
  function handleFilterClick_publicar() {

    console.log("debug parte 2")
    try {
      console.log("Dados : "+ data.idUser);
      console.log("Dados : "+ texto);
      console.log("Dados img : "+ imagem);

      const formData = new FormData();

      formData.append("usuario", data.idUser);
      formData.append("conteudo", texto);
      if (imagem) {
        formData.append("imgPost", imagem);
      }


      fetch('http://localhost:8080/criarP', {
        method: 'POST',
        body: formData, // Usando FormData para lidar com arquivos e dados
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('erro');
          }
          return response.json();
        })
        .then(data => {

          console.log("ola Novos dados: ")
          console.log('Sucesso:', data);
          navigate('/pagina-inicial/perfil', { state: { data: data } });
        })
    }
    catch (error) {
      console.log("data nao importado")
    }

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
      <Navbar filtroSelecionado={null} datas={data} />
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
            <Button text="Publicar" onClick={handleFilterClick_publicar} className="button-publicar" />
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
