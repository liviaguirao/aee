import { useState } from 'react';
import styles from "./App.module.css";
import { motion } from 'framer-motion';
import logo from './assets/logo-completa.png'; // Caminho relativo ao arquivo atual


function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
    // Aqui você pode adicionar a lógica de autenticação
  };

  return (
    <div className={styles.app}>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
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
            <input className={styles.submitButton} type="submit" value="entrar" />
          </div>
        </form>
        <div className={styles.OU}>
          <div className={styles.linha}></div>
          <h5>ou</h5>
          <div className={styles.linha}></div>
        </div>
        <motion.button className={styles.BotaoCriarConta} onClick={handleSubmit}>
          criar conta
        </motion.button>


      </div>
      <div className={styles.container}>
        <img src={logo} alt="Logo" />
        <p className={styles.escrito1}>Encontre o artista perfeito para o seu evento.  E artista, mostre seu talento para o mundo!</p>
        <p className={styles.escrito2}>Se conectem para criar experiências memoráveis.</p>
      </div>
    </div>
  );
}

export default App;