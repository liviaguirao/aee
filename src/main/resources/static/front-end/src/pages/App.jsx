import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Criar_publicacao from './Criar_publicacao';
import Sel_filtros from './Sel_filtros';
import Filtro_artista from './FiltroDaPubliartista';
import Filtro_evento from './FiltroDaPublievento';
import Pre_visual from './Pre_visual';
import  {ImageProvider}  from './ImageContext';

function App() {
  return (
    <BrowserRouter>
      <ImageProvider> {/* Envolver Routes com ImageProvider */}
        <Routes>
          <Route path="/" element={<Criar_publicacao />} />
          <Route path="/filtros" element={<Sel_filtros />} />
          <Route path="/filtro_artista" element={<Filtro_artista />} />
          <Route path="/filtro_evento" element={<Filtro_evento />} />
          <Route path="/pre_visual" element={<Pre_visual />} />
        </Routes>
      </ImageProvider>
    </BrowserRouter>
  );
}

export default App;
