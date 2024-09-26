import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar entre páginas
import styles from "../styles/paginainicial.module.css";
import Navbar from '../components/navbar'; // Importando a Navbar

function PaginaInicial() {
    const [filtroSelecionado, setFiltroSelecionado] = useState(''); // Estado para armazenar a escolha
    const navigate = useNavigate(); // Hook para navegação

    const handleFiltroClick = (filtro) => {
        setFiltroSelecionado(filtro); // Atualiza o estado com 'Artista' ou 'Evento'
       
    };

    return (
        <>
            <Navbar filtroSelecionado={filtroSelecionado} /> {/* Passamos o estado para a Navbar */}
            <div className={styles.container}>
                <div className={styles.filtro}>
                    <button onClick={() => handleFiltroClick('Artista')}>Artistas</button>
                    <button onClick={() => handleFiltroClick('Evento')}>Eventos</button>
                </div>
            </div>
        </>
    );
}

export default PaginaInicial;
