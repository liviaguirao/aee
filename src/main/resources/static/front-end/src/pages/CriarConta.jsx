import { useState } from 'react';
import styles from "../styles/criarConta.module.css";
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import logo from '../../public/assets/logo-simples.png'; // Caminho relativo ao arquivo atual

function CriarConta() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    const handleSubmit = (event) => {
        event.preventDefault();
       
        fetch('http://localhost:8080/criar-conta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify({
                identificador: nome,
                email: email,
                senha: senha,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro na criação da conta');
            }
            return response.json(); // Supondo que o servidor retorne uma resposta JSON
        })
        .then((data) => {
            console.log('Sucesso:', data);
            navigate('/'); // Redireciona após o sucesso
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
        // Aqui você pode adicionar a lógica de criação de conta (como integração com um backend)
    };

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <img src={logo} alt="Logo" />
                <p className={styles.escrito1}>Encontre o artista perfeito para o seu evento. E artista, mostre seu talento para o mundo!</p>
                <p className={styles.escrito2}>Se conectem para criar experiências memoráveis.</p>
            </div>
            <div className={styles.loginContainer}>
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome:</label> {/* Campo para o nome */}
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
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

                    <button className={styles.submitButton} type="submit">Criar Conta</button>
                </form>
            </div>
        </div>
    );
}

export default CriarConta;
