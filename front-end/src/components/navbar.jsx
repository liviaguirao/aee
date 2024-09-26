import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/navbar.module.css";
import { FaHome, FaSearch, FaCalendarAlt } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";
import { IoFilter, IoClose } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

// Componente de Modal
const SearchModal = ({ isOpen, onClose, recentSearches, setRecentSearches }) => {
    if (!isOpen) return null;

    const navigate = useNavigate(); // Hook para navegação
    const [searchTerm, setSearchTerm] = useState('');

    // Lista de perfis simulada (substitua pelos dados reais)
    const profiles = [
        'João Silva',
        'Maria Oliveira',
        'Pedro Santos',
        'Ana Costa',
        'Lucas Pereira',
        'Julia Almeida',
        'Rafael Lima',
        'Mariana Soares',
    ];

    // Filtrar perfis com base no termo de pesquisa
    const filteredProfiles = profiles.filter(profile =>
        profile.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Função para navegar para a página do perfil
    const handleProfileClick = (profile) => {
        // Adicionar à lista de pesquisas recentes
        if (!recentSearches.includes(profile)) {
            const updatedSearches = [profile, ...recentSearches]; // Adicionar ao início da lista
            setRecentSearches(updatedSearches); // Atualizar o estado
            localStorage.setItem('recentSearches', JSON.stringify(updatedSearches)); // Persistir no localStorage
        }
        navigate(`/perfil/${profile}`); // Redirecionar para a página do perfil
        setSearchTerm(''); // Limpar o input
        onClose(); // Fechar o modal
    };

    // Função para resetar as pesquisas recentes
    const resetRecentSearches = () => {
        setRecentSearches([]); // Limpar o estado
        localStorage.removeItem('recentSearches'); // Remover do localStorage
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}><IoClose /></button>

                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquise por perfis... "
                />

                {searchTerm && filteredProfiles.length > 0 ? (
                    <ul className={styles.listaPerfil}>
                        {filteredProfiles.map((profile, index) => (
                            <li key={index} onClick={() => handleProfileClick(profile)}>
                                <div className={styles.container}>
                                    <img
                                        src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rzUSobX0RTFPksl6-Pl28C5itfvrW3mug6NkFW7kPeQ="
                                        alt="fotoPerfil" />
                                    {profile}
                                </div>
                                <p>artista</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <h3>Pesquisas Recentes</h3>
                        <ul className={styles.listaPerfil}>
                            {recentSearches.length > 0 ? (
                                recentSearches.map((search, index) => (
                                    <li key={index} onClick={() => handleProfileClick(search)}>
                                        <div className={styles.container}>
                                            <img
                                                src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rzUSobX0RTFPksl6-Pl28C5itfvrW3mug6NkFW7kPeQ="
                                                alt="fotoPerfil" />
                                            {search}
                                        </div>
                                        <p>artista</p>
                                    </li>
                                ))
                            ) : (
                                <li></li>
                            )}
                        </ul>
                    </>
                )}
                {recentSearches.length > 0 && (
                    <button onClick={resetRecentSearches} className={styles.resetButton}>
                        Resetar Pesquisas Recentes
                    </button>
                )}
            </div>
        </div>
    );
};

function Navbar({ filtroSelecionado }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar o modal
    const [recentSearches, setRecentSearches] = useState(() => {
        const savedSearches = localStorage.getItem('recentSearches');
        return savedSearches ? JSON.parse(savedSearches) : []; // Recuperar do localStorage
    });
    const [filtros, setFiltros] = useState("");

    useEffect(() => {
        if (filtroSelecionado === 'Artista') {
            setFiltros('/filtros-artistas'); // Aqui você define os filtros específicos de artista
        } else if (filtroSelecionado === 'Evento') {
            setFiltros('/filtros-eventos'); // Aqui os filtros específicos de evento
        }else{
            setFiltros('/filtros-eventos');
        }
    }, [filtroSelecionado]);

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
                    onClick={() => handleNavigate(filtros)}
                    className={location.pathname === filtros ? styles.active : ''}
                >
                    <IoFilter />
                </li>
            </ul>

            <button className={styles.logoutButton} onClick={() => handleNavigate('/')}>
                Sair
            </button>

            <SearchModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                recentSearches={recentSearches}
                setRecentSearches={setRecentSearches} // Passar a função de atualização
            /> {/* Modal de pesquisa */}
        </nav>
    );
}

export default Navbar;
