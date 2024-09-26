import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Importar AnimatePresence e motion
import Login from './pages/login'; // Importe o componente da página de login
import CriarConta from './pages/CriarConta'; // Importe o componente da página de criar conta
import Navbar from './components/navbar';
import Filtro_Evento from './pages/Filtro_evento';

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
                <Navbar />
            }
          />
          <Route
            path="/filtros"
            element={
                <Filtro_Evento />
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default AppRouter;