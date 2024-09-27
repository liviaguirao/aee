import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar entre páginas
import styles from "../styles/publicacao.module.css";
import { FaHeart } from "react-icons/fa";

function PaginaInicial({ Nomeusuario, fotodeperfil, conteudo, imagem }) {

    const navigate = useNavigate(); // Hook para navegação

    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const handleNavigate = (path) => {
        navigate(path);
    };
    const handleLike = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikeCount(prevCount => prevCount - 1);
        } else {
            setIsLiked(true);
            setLikeCount(prevCount => prevCount + 1);
        }
    };

    return (
        <>
            <div className={styles.publicação}>
                <div className={styles.containerP}>
                    <div className={styles.profile}>
                        <img
                            src={fotodeperfil}
                            alt="Foto de Perfil"
                            onClick={() => handleNavigate('/perfil')}
                        />
                        {Nomeusuario}
                    </div>
                    <img className={styles.conteudo} src={imagem}
                        alt="cachorro" />
                    <p className={isExpanded ? styles.expanded : styles.truncated}>
                    {conteudo}
                    </p>
                    <button onClick={handleToggleExpand}>
                        {isExpanded ? "Ver menos" : "Ver mais..."}
                    </button>
                </div>
                <button className={styles.botaoLike} onClick={handleLike}>
                    <FaHeart className={isLiked ? styles.descurtir : styles.curtir} />{likeCount}
                </button>
            </div>
        </>
    );
}

export default PaginaInicial;
