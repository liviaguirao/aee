import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import '../styles/App.css'
import '../styles/Style.css'
import Navbar from '../components/navbar';

function Criar_publicacao() {
  const navigate = useNavigate();
  const [imagem, setImagem] = useState(null);
  const fileInputRef = useRef(null);
  const [texto, setTexto] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleTextChange = (event) => {
    const novoTexto = event.target.value;
    setTexto(novoTexto);
    sessionStorage.setItem('textoPublicacao', novoTexto);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const textoSalvo = sessionStorage.getItem('textoPublicacao');
    if (textoSalvo) {
      setTexto(textoSalvo);
    }
    const imagemSalva = sessionStorage.getItem('imagemSelecionada');
    if (imagemSalva) {
      setImagem(imagemSalva);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
        sessionStorage.setItem('imagemSelecionada', reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagem(null);
    }
  };

  const handleCancel = () => {
    sessionStorage.removeItem('textoPublicacao');
    sessionStorage.removeItem('imagemSelecionada');
    setTexto('');
    setImagem(null);
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const Button = ({ text, onClick, className }) => (
    <div className={`button-base ${className}`} onClick={onClick}>
      {text}
    </div>
  );

  const Popup = ({ onConfirm, onClose }) => (
    <div className="popup-background">
      <div className="popup-container">
        <p>Tem certeza que deseja cancelar?</p>
        <div className="buttons-container">
          <Button text="Sim" onClick={onConfirm} className="pop-yes-button" />
          <Button text="Não" onClick={onClose} className="pop-no-button" />
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
    <div className='container'>
      <Navbar />
      <div className='containerCriarPublicacao'>
        <div className='texto'>
          <textarea
            placeholder="Escreva aqui"
            value={texto}
            onChange={handleTextChange}
          />
        </div>
        <div className='botoes'>
          <div className='botoes1'>
            <Button text="Anexar arquivos" onClick={triggerFileInput} className="button-anexar" />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
              accept="image/jpeg, image/png"
            />
            <Button text="Filtros" onClick={handleFilterClick_filtros} className="button-filtros" />


          </div>
          <div className='botoes1'>

            <Button text="Pré-visualizar" onClick={handleFilterClick_pre} className="button-pre" />
            <Button text="Cancelar" onClick={() => setShowPopup(true)} className="button-cancelar" />
            {showPopup && <Popup onConfirm={handleCancel} onClose={handleClosePopup} />}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Criar_publicacao;
