import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './Style.css';

function Criar_publicacao() {
  const navigate = useNavigate();
  const [imagem, setImagem] = useState(null);
  const fileInputRef = useRef(null);
  const [texto, setTexto] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleTextChange = (event) => {
    const novoTexto = event.target.value;
    setTexto(novoTexto);
    // Salvar o texto no sessionStorage
    sessionStorage.setItem('textoPublicacao', novoTexto);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    // Recuperar o texto salvo no sessionStorage ao carregar o componente
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
        sessionStorage.setItem('imagemSelecionada', reader.result); // Salva a imagem no sessionStorage
      };
      reader.readAsDataURL(file);
    } else {
      setImagem(null);
    }
  };

  const handleCancel = () => {
    // Limpar sessionStorage e resetar estados
    sessionStorage.removeItem('textoPublicacao');
    sessionStorage.removeItem('imagemSelecionada');
    setTexto('');
    setImagem(null);
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const Button = ({ text, onClick, className }) => {
    return (
      <div className={`button-base ${className}`} onClick={onClick}>
        {text}
      </div>
    );
  };

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
    <>
      <div style={{ width: 1440, height: 653, position: 'relative', background: 'white' }}>
        <div style={{ width: 900, height: 467, left: 203, top: 97, position: 'absolute', background: 'white', borderRadius: 15, border: '5px #820B8A solid' }} />
        <Button text="Anexar arquivos" onClick={triggerFileInput} className="button-anexar" />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
          accept="image/jpeg, image/png"
        />
        <textarea
          style={{ left: 248, top: 120, position: 'absolute', width: 800, height: 450, color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', background: 'transparent', border: 'none', outline: 'none', resize: 'none', overflow: 'hidden' }}
          placeholder="Escreva aqui"
          autoFocus
          value={texto}
          onChange={handleTextChange}
        />
        <Button text="Sair" className="button-sair" />
        <Button text="Pré-visualizar" onClick={handleFilterClick_pre} className="button-pre" />
        <Button text="Filtros" onClick={handleFilterClick_filtros} className="button-filtros" />
        <Button text="Cancelar" onClick={() => setShowPopup(true)} className="button-cancelar" />
        {showPopup && <Popup onConfirm={handleCancel} onClose={handleClosePopup} />}
      </div>
    </>
  );
}

export default Criar_publicacao;
