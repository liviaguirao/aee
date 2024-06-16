import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Criar_publicacao from './Criar_publicacao';
import Sel_filtros from './Sel_filtros';
import Filtro_artista from './Filtro_artista';  
import Filtro_evento from './Filtro_evento';
import Pre_visual from './Pre_visual';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/criar" element={<Criar_publicacao />} />
        <Route path="/filtros" element={<Sel_filtros />} />
        <Route path="/filtro_artista" element={<Filtro_artista />} />
        <Route path="/filtro_evento" element={<Filtro_evento />} />
        <Route path="/pre_visual" element={<Pre_visual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
