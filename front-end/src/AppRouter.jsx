import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Importar AnimatePresence e motion
import Login from './pages/login'; // Importe o componente da página de login
import CriarConta from './pages/CriarConta'; // Importe o componente da página de criar conta
import Filtro_Artista from './pages/Filtro_Artista';
import Filtro_Evento from './pages/Filtro_evento';
import PaginaInicial from './pages/PaginaInicial';
import Perfil from './pages/Perfil';
import Criar_publicacao from './pages/Criar_publicacao';
import Sel_filtros from './pages/Sel_filtros';
import Filtro_artista from './pages/FiltroDaPubliartista';
import Filtro_evento from './pages/FiltroDaPublievento';
import Pre_visual from './pages/Pre_visual';

const pageAnimation = {
  initial: { opacity: 0 }, // Inicialmente invisível
  animate: { opacity: 1 }, // Animação para entrar (visível)
  exit: { opacity: 0 }, // Animação para sair (invisível)
  transition: { duration: 0.7, ease: 'easeInOut' } // Transição suave
};

function AppRouter() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div {...pageAnimation} key="login">
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/criar-conta"
            element={
              <motion.div {...pageAnimation} key="criar-conta">
                <CriarConta />
              </motion.div>
            }
          />
          <Route
            path="/pagina-inicial"
            element={
                <PaginaInicial />
            }
          />
          <Route
            path="/pagina-inicial/filtros-eventos"
            element={
                <Filtro_Evento />
            }
          />
          <Route
            path="/pagina-inicial/filtros-artistas"
            element={
                <Filtro_Artista />
            }
          />
          <Route
            path="/pagina-inicial/perfil"
            element={
                <Perfil name="Marcelo" age={`20`} city="Juiz de Fora" art="Musica" about="Nao tinha medo o tal Joao de santo cristo era o que todos diziam quando ele se perdeu" />
            }
          />
          <Route path="/pagina-inicial/criar-publicação" element={<Criar_publicacao />} />
          <Route path="/pagina-inicial/criar-publicação/filtros" element={<Sel_filtros />} />
          <Route path="/pagina-inicial/criar-publicação/filtros/filtro_artista" element={<Filtro_artista />} />
          <Route path="/pagina-inicial/criar-publicação/filtros/filtro_evento" element={<Filtro_evento />} />
          <Route path="/pagina-inicial/criar-publicação/pre_visual" element={<Pre_visual />} />
          
        </Routes>
        
      </AnimatePresence>
    </Router>
  );
}

export default AppRouter;
