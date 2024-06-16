import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import './App.css'


function Criar_publicacao() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = React.createRef();
  const [texto, setTexto] = useState('');

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  const handleTextChange = (event) => {
    setTexto(event.target.value);
  };

  function handleFilterClick_filtros() {
    navigate('/filtros'); // Navega para o arquivo Sel_filtros.jsx
  }

  function handleFilterClick_pre() {
    navigate('/pre_visual', { state: { texto } }); // Navega para o arquivo Pre_visual.jsx
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
      <div style={{width: 24.24, height: 24.24, left: 40, top: 233, position: 'absolute', background: 'black'}}></div>
      <div style={{width: 29.89, height: 34.85, left: 40, top: 287, position: 'absolute'}}>
        <div style={{width: 22.42, height: 21.78, left: 3.74, top: 8.71, position: 'absolute', borderRadius: 2, border: '1px black solid'}} />
        <div style={{width: 22.42, height: 5.81, left: 3.74, top: 8.71, position: 'absolute', background: 'black', borderTopLeftRadius: 2, borderTopRightRadius: 2}} />
        <div style={{width: 4.36, height: 0, left: 8.72, top: 4.36, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
        <div style={{width: 4.36, height: 0, left: 21.17, top: 4.36, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
        <div style={{width: 4.98, height: 2.90, left: 8.72, top: 17.42, position: 'absolute', background: 'black', borderRadius: 0.50}} />
        <div style={{width: 4.98, height: 2.90, left: 8.72, top: 23.23, position: 'absolute', background: 'black', borderRadius: 0.50}} />
        <div style={{width: 4.98, height: 2.90, left: 16.19, top: 17.42, position: 'absolute', background: 'black', borderRadius: 0.50}} />
        <div style={{width: 4.98, height: 2.90, left: 16.19, top: 23.23, position: 'absolute', background: 'black', borderRadius: 0.50}} />
      </div>
      <div style={{width: 23.24, height: 20.33, left: 41, top: 359, position: 'absolute', background: 'black'}}></div>
      <div style={{width: 34, height: 34, left: 39, top: 408, position: 'absolute'}}>
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
      <div style={{width: 27.02, height: 23.87, left: 40, top: 173, position: 'absolute', background: 'black'}}></div>
      <div style={{width: 900, height: 467, left: 203, top: 97, position: 'absolute', background: 'white', borderRadius: 15, border: '5px #820B8A solid'}} />
      <div style={{width: 258, height: 76, left: 1135, top: 97, position: 'absolute', background: '#820B8A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '1px black solid'}}></div>
      <div style={{width: 228, height: 36, left: 1150, top: 117, position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}}onClick={triggerFileInput}>Anexar arquivos<br/></div>
      <input 
        type='file'
        ref={fileInputRef}
        style={{display: 'none'}}
        onChange={handleFileSelect}
      />
      <textarea style={{left: 248, top: 120, position: 'absolute', width: 800, height: 450, color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', background:'transparent', border: 'none', outline: 'none', resize: 'none', overflow:'hidden'}}placeholder='Escreva aqui' autoFocus value={texto} onChange={handleTextChange}/>
      <div style={{width: 258, height: 76, left: 1135, top: 195, position: 'absolute', background: '#820B8A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '1px black solid'}} />
      <div style={{width: 258, height: 76, left: 1135, top: 488, position: 'absolute', background: '#820B8A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '1px black solid'}} />
      <div style={{width: 258, height: 76, left: 1135, top: 293, position: 'absolute', background: '#820B8A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '1px black solid'}}></div>
      <div style={{width: 48, height: 19, left: 32, top: 608, position: 'absolute'}}>
        <div style={{width: 48, height: 19, left: 0, top: 0, position: 'absolute', background: '#820B8A', borderRadius: 13}} />
        <div style={{width: 48, height: 19, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Manjari', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}}>Sair</div>
      </div>
      <div style={{width: 258, height: 76, left: 1135, top: 293, position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={handleFilterClick_pre}>Pré-visualizar</div>
      <div style={{left: 1230, top: 210, position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={handleFilterClick_filtros} >Filtros</div>
      <div style={{width: 127, height: 29, left: 1200, top: 510, position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}}>Cancelar</div>
    </div>
    </>
  )
}

export default Criar_publicacao
