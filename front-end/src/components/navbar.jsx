import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/navbar.module.css";
import { FaHome, FaSearch, FaCalendarAlt } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";
import { IoFilter, IoClose } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

// Componente de Modal
const SearchModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}><IoClose /></button>

                <input type="text" placeholder="pesquisar" />
                <h3>Pesquisas Recentes</h3>
                <ul>
                    <li>Nome, Compositor</li>
                    <li>Nome, Compositor</li>
                    <li>Nome, Compositor</li>
                </ul>
            </div>
        </div>
    );
};

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar o modal

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <nav>
            <div className={styles.profile}>
                <img
                    src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rzUSobX0RTFPksl6-Pl28C5itfvrW3mug6NkFW7kPeQ="
                    alt="Foto de Perfil"
                    className={styles.profileImg}
                    onClick={() => handleNavigate('/perfil')}
                />
            </div>

            <ul className={styles.menu}>
                <li
                    onClick={() => handleNavigate('/pagina-inicial')}
                    className={location.pathname === '/pagina-inicial' ? styles.active : ''}
                >
                    <FaHome />
                </li>
                <li
                    onClick={() => setModalOpen(true)} // Abre o modal ao clicar
                    className={location.pathname === '/search' ? styles.active : ''}
                >
                    <FaSearch />
                </li>
                <li
                    onClick={() => handleNavigate('/agenda')}
                    className={location.pathname === '/agenda' ? styles.active : ''}
                >
                    <FaCalendarAlt />
                </li>
                <li
                    onClick={() => handleNavigate('/criar-publicação')}
                    className={location.pathname === '/criar-publicação' ? styles.active : ''}
                >
                    <MdAddCard />
                </li>
                <li
                    onClick={() => handleNavigate('/filtros')}
                    className={location.pathname === '/filtros' ? styles.active : ''}
                >
                    <IoFilter />
                </li>
            </ul>

            <button className={styles.logoutButton} onClick={() => handleNavigate('/')}>
                Sair
            </button>

            <SearchModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> {/* Modal de pesquisa */}
        </nav>
    );
}

export default Navbar;
