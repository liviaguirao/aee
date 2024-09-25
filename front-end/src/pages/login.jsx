import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import styles from "../styles/login.module.css";
import { motion } from 'framer-motion';
import logo from '../assets/logo-completa.png'; // Caminho relativo ao arquivo atual


function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/pagina-inicial'); 
    // Lógica de autenticação aqui
  };

  const handleCreateAccount = () => {
    navigate('/criar-conta'); // Navega para a página de criar conta
  };

  return (
    <motion.div className={styles.app}>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <div className={styles.ContainersubmitButton}>
            <input className={styles.submitButton} type="submit" value="Entrar" />
          </div>
        </form>
        <div className={styles.OU}>
          <div className={styles.linha}></div>
          <h5>ou</h5>
          <div className={styles.linha}></div>
        </div>
        <motion.button className={styles.BotaoCriarConta} onClick={handleCreateAccount}>
          Criar conta
        </motion.button>
      </div>
      
      <div className={styles.container}>
        <img src={logo} alt="Logo" />
        <p className={styles.escrito1}>Encontre o artista perfeito para o seu evento. E artista, mostre seu talento para o mundo!</p>
        <p className={styles.escrito2}>Se conectem para criar experiências memoráveis.</p>
      </div>
    </motion.div>
  );
}

export default Login;
