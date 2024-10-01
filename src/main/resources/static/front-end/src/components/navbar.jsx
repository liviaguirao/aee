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

    const [userData, setUserData] = useState([]);

    // Simulando a requisição ao backend
    useEffect(() => {
        fetch('http://localhost:8080/user', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao recuperar dados');
                }
                return response.json();
            })
            .then(data => {
                setUserData(data); // Armazenando os dados no estado
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    // Filtrar perfis com base no termo de pesquisa
    const filteredProfiles = userData.filter(user =>
        user.nome && user.nome.toLowerCase().includes(searchTerm.toLowerCase())
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
                        {filteredProfiles.map((user, index) => (
                            <li key={index} onClick={() => handleProfileClick(user)}>
                                <div className={styles.container}>
                                    <img
                                        src={user.imgPerfil || "default_image_url"} // Substitua com a URL padrão ou obtenha do user
                                        alt="fotoPerfil" />
                                    {user.nome}
                                </div>
                                <p>{user.bio || 'artista'}</p>
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
                                                src={search.imgPerfil || "default_image_url"} // Usar a foto do objeto
                                                alt="fotoPerfil" />
                                            {search.nome}
                                        </div>
                                        <p>{search.bio || 'artista'}</p> {/* Usar a bio do objeto */}
                                    </li>
                                ))
                            ) : (
                                <li>Nenhuma pesquisa recente encontrada.</li>
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

function Navbar({ filtroSelecionado, datas }) {

    if (datas) {
        console.log("recebeu");
        console.log(datas.identificador);
        console.log("caminho perfil recebido" + datas.imgPerfil);
    } else {
        console.log("Data não está disponível");
    }

    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar o modal
    const [recentSearches, setRecentSearches] = useState(() => {
        const savedSearches = localStorage.getItem('recentSearches');
        return savedSearches ? JSON.parse(savedSearches) : []; // Recuperar do localStorage
    });

    useEffect(() => {
        const savedSearches = localStorage.getItem('recentSearches');
        console.log('Saved Searches:', savedSearches); // Para verificar o conteúdo armazenado
        setRecentSearches(savedSearches ? JSON.parse(savedSearches) : []); // Recupera do localStorage
    }, []);

    const [filtros, setFiltros] = useState("");

    useEffect(() => {
        if (filtroSelecionado === 'Artista') {
            setFiltros('/pagina-inicial/criar-publicação/filtros/filtro_artista'); // Aqui você define os filtros específicos de artista
        } else if (filtroSelecionado === 'Evento') {
            setFiltros('/pagina-inicial/criar-publicação/filtros/filtro_evento'); // Aqui os filtros específicos de evento
        } else {
            setFiltros('/pagina-inicial/criar-publicação/filtros/filtro_evento');
        }
    }, [filtroSelecionado]);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <nav>
            <div className={styles.profile}>
                <img
                    src={datas.imgPerfil}
                    alt="Foto de Perfil"
                    className={styles.profileImg}
                    onClick={() => navigate('/pagina-inicial/perfil', { state: { data: datas } })}
                />
            </div>

            <ul className={styles.menu}>
                <li
                    onClick={() => navigate('/pagina-inicial', { state: { data: datas } })}
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
                    onClick={() => navigate('/pagina-inicial/agenda', { state: { data: datas } })}
                    className={location.pathname === '/agenda' ? styles.active : ''}
                >
                    <FaCalendarAlt />
                </li>
                <li
                    onClick={() => navigate('/pagina-inicial/criar-publicação', { state: { data: datas } })}
                    className={location.pathname === '/pagina-inicial/criar-publicação' ? styles.active : ''}
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
