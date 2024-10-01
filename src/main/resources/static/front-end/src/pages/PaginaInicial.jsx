import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "../styles/paginainicial.module.css";
import Navbar from '../components/navbar';
import Publicacao from '../components/publicacao';
import { AiOutlineToTop } from "react-icons/ai";
import logo from '../../public/assets/logo-simples.png';

function PaginaInicial() {
    const location = useLocation();
    const data = location.state?.data;
    const [filtroSelecionado, setFiltroSelecionado] = useState('');
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [publicacoes, setPublicacoes] = useState([]);
    const [postData, setPostData] = useState([]);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [userData, setUserData] = useState([]);

    // Chamada para obter dados do usuário
    useEffect(() => {
        fetch('http://localhost:8080/user', { method: 'GET' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao recuperar dados');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setUserData(data);
                // Armazenando os dados no estado
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    // Chamada para obter postagens
    useEffect(() => {
        fetch('http://localhost:8080/posts', { method: 'GET' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao recuperar dados');
                }
                return response.json();
            })
            .then(datapost => {
                setPostData(datapost); // Armazenando os dados no estado
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    // Mapeia postData para publicacoes
    useEffect(() => {
        const publis = [];

        for (const user of userData) {
            for (const post of postData) {
                console.log(`Verificando post ${post.id} do usuário ${user.idUser}`); // Adiciona um console log para verificar quais posts estão sendo verificados
                // Verifica se o ID do usuário no post corresponde ao ID do usuário
                if (post.usuario === user.idUser) {
                    console.log(`Post ${post.id} pertence ao usuário ${user.idUser}`); // Adiciona um console log para verificar se o post pertence ao usuário
                    // Se o nome do usuário for nulo, adiciona uma publicação com nome e foto padrão

                    if (user.nome == null) {
                        publis.push({
                            id: post.id,
                            Nomeusuario: user.identificador, // Adiciona um nome padrão
                            fotodeperfil: user.imgPerfil, // Foto do perfil do usuário
                            conteudo: post.conteudo, // Conteúdo do post
                            imagem: post.imgPost // Imagem do post
                        });
                    } else {
                        // Caso o nome do usuário exista
                        publis.push({
                            id: post.id,
                            Nomeusuario: user.nome, // Nome real do usuário
                            fotodeperfil: user.imgPerfil, // Foto do perfil do usuário
                            conteudo: post.conteudo, // Conteúdo do post
                            imagem: post.imgPost // Imagem do post
                        });
                    }
                }
            }
        }

        setPublicacoes(publis); // Atualiza o estado com as publicações formatadas
    }, [userData, postData]); // Adiciona userData e postData como dependências

    const handleFiltroClick = (filtro) => {
        setFiltroSelecionado(filtro);
    };

    const scrollToTop = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollPosition = containerRef.current.scrollTop;
                setShowScrollToTop(scrollPosition > 300);
            }
        };

        const currentContainer = containerRef.current;
        currentContainer.addEventListener('scroll', handleScroll);

        return () => {
            if (currentContainer) {
                currentContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleProfileClick = (profile) => {
        navigate(`/perfil/${profile}`);
    };

    return (
        <>
            <Navbar filtroSelecionado={filtroSelecionado} datas={data} />
            <div className={styles.containermax}>
                <div className={styles.container} ref={containerRef}>
                    <div className={styles.filtro}>
                        <button onClick={() => handleFiltroClick('Artista')}>Artistas</button>
                        <button onClick={() => handleFiltroClick('Evento')}>Eventos</button>
                    </div>
                    <div className={styles.publicacoes}>
                        {publicacoes.map((publicacao) => (
                            <Publicacao
                                key={publicacao.id}
                                Nomeusuario={publicacao.Nomeusuario} // Corrigido para usar Nomeusuario
                                fotodeperfil={publicacao.fotodeperfil}
                                usuario={publicacao.usuario}
                                conteudo={publicacao.conteudo}
                                imagem={publicacao.imagem}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.NovosPerfil}>
                    <img className={styles.logo} src={logo} alt="Logo" />
                    <p className={styles.escrito} >Destaques do momento</p>
                    <ul className={styles.listaPerfil}>
                        <li>
                            <div className={styles.containercard}>
                                <img
                                    src={userData[userData.length - 5] && userData[userData.length - 5].imgPerfil || "https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rzUSobX0RTFPksl6-Pl28C5itfvrW3mug6NkFW7kPeQ="}
                                    alt="fotoPerfil" />
                                <p>{userData[userData.length - 5] && userData[userData.length - 5].nome || 'artista'}</p>

                            </div>
                            <p>{userData[userData.length - 5] && userData[userData.length - 5].ocupacao || 'artista'}</p>

                        </li>
                        <li>
                            <div className={styles.containercard}>
                                <img
                                    src={userData[userData.length - 4] && userData[userData.length - 4].imgPerfil || "https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rzUSobX0RTFPksl6-Pl28C5itfvrW3mug6NkFW7kPeQ="}
                                    alt="fotoPerfil" />
                                <p>{userData[userData.length - 4] && userData[userData.length - 4].nome || 'artista'}</p>

                            </div>
                            <p>{userData[userData.length - 4] && userData[userData.length - 4].ocupacao || 'artista'}</p>
                        </li>
                        <li>
                            <div className={styles.containercard}>
                                <img
                                    src={userData[userData.length - 3] && userData[userData.length - 3].imgPerfil || "https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rzUSobX0RTFPksl6-Pl28C5itfvrW3mug6NkFW7kPeQ="}
                                    alt="fotoPerfil" />
                                <p>{userData[userData.length - 3] && userData[userData.length - 3].nome || 'artista'}</p>
                            </div>
                            <p>{userData[userData.length - 3] && userData[userData.length - 3].ocupacao || 'artista'}</p>

                        </li>
                        <li>
                            <div className={styles.containercard}>
                                <img
                                    src={userData[userData.length - 2] && userData[userData.length - 2].imgPerfil || "https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rzUSobX0RTFPksl6-Pl28C5itfvrW3mug6NkFW7kPeQ="}
                                    alt="fotoPerfil" />
                                <p>{userData[userData.length - 2] && userData[userData.length - 2].nome || 'artista'}</p>

                            </div>
                            <p>{userData[userData.length - 2] && userData[userData.length - 2].ocupacao || 'artista'}</p>
                        </li>
                        <li>
                            <div className={styles.containercard}>
                                <img
                                    src={userData[userData.length - 1] && userData[userData.length - 1].imgPerfil || "https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=rzUSobX0RTFPksl6-Pl28C5itfvrW3mug6NkFW7kPeQ="}
                                    alt="fotoPerfil" />
                                <p>{userData[userData.length - 1] && userData[userData.length - 1].nome || 'artista'}</p>
                            </div>
                            <p>{userData[userData.length - 1] && userData[userData.length - 1].ocupacao || 'artista'}</p>
                        </li>
                    </ul>
                </div>

                {showScrollToTop && (
                    <button className={styles.scrollToTop} onClick={scrollToTop}>
                        <AiOutlineToTop />
                    </button>
                )}
            </div>
        </>
    );
}

export default PaginaInicial;
