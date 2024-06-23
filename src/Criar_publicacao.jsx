import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import './Style.css'
import { useImage } from './ImageContext';


function Criar_publicacao() {
  const navigate = useNavigate();
  const [imagem, setImagem] = useState(null);;
  const fileInputRef = useRef(null);
  const [texto, setTexto] = useState('');

  const handleTextChange = (event) => {
    const novoTexto = event.target.value;
    setTexto(novoTexto);
    // Salvar o texto no localStorage
    localStorage.setItem('textoPublicacao', novoTexto);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const textoSalvo = localStorage.getItem('textoPublicacao');
    if (textoSalvo) {
      setTexto(textoSalvo);
    }
  }, []);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagem(null);
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Tentar recuperar a imagem do localStorage ao carregar o componente
    const imagemSalva = localStorage.getItem('imagemSelecionada');
    if (imagemSalva) {
      setImagem(imagemSalva);
    }
  }, []);


  const Button = ({ text, onClick, style, className }) => {
    return (
      <div className={`button-base ${className}`} style={{ ...style }} onClick={onClick}>
        {text}
      </div>
    );
  };

  const Popup = ({ onClose }) => (
    <div className="popup-background">
      <div className="popup-container">
        <p>Tem certeza que deseja cancelar?</p>
        <div className="buttons-container"> {/* Contêiner flexível para os botões */}
          <Button
            text="Sim"
            onClick={onClose} 
            className="pop-yes-button"
          />
          <Button
            text="Não"
            onClick={onClose}
            className="pop-no-button"
          />
        </div>
      </div>
    </div>
  );

  function handleFilterClick_filtros() {
    navigate('/filtros'); 
  }

  function handleFilterClick_pre() {
    navigate('/pre_visual', { state: { texto, imagem } }); 
  }


  return (
    <>
      <div style={{width: 1440, height: 653, position: 'relative', background: 'white'}}>
      
      <div style={{width: 900, height: 467, left: 203, top: 97, position: 'absolute', background: 'white', borderRadius: 15, border: '5px #820B8A solid'}} />
      <Button
        text="Anexar arquivos"
        onClick={triggerFileInput}
        className='button-anexar'
      />
      <input 
        type='file'
        ref={fileInputRef}
        style={{display: 'none'}}
        onChange={handleImageChange}
        accept="image/jpeg, image/png"
      />
      <textarea 
          style={{left: 248, top: 120, position: 'absolute', width: 800, height: 450, color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', background:'transparent', border: 'none', outline: 'none', resize: 'none', overflow:'hidden'}}
          placeholder='Escreva aqui' 
          autoFocus 
          value={texto} 
          onChange={handleTextChange}
        />
      <div style={{width: 258, height: 76, left: 1135, top: 488, position: 'absolute', background: '#820B8A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '1px black solid'}} />
      <div style={{width: 258, height: 76, left: 1135, top: 293, position: 'absolute', background: '#820B8A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '1px black solid'}}></div>
      
      <Button
        text="Sair"
        // onClick={handleSairClick} // Substitua handleSairClick pela função que lida com o clique do botão
        className="button-sair" 
      />

      <Button
        text="Pré-visualizar"
        onClick={handleFilterClick_pre}
        className="button-pre"
      />
      
      <Button
        text="Filtros"
        onClick={handleFilterClick_filtros}
        className="button-filtros"
      />

      <Button
        text="Cancelar"
        onClick={() => setShowPopup(true)} 
        className="button-cancelar"
      />
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
    </>
  )
}

export default Criar_publicacao
