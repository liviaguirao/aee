
import styles from "../styles/EditPerfil.module.css";

function EditPerfil({
  info,
  setName,
  setAge,
  setCity,
  setArt,
  setBio,
  setProfilePicture,
  setCoverPhoto,
  update
}) {
  return (
    <div className={styles.contineredit}>
      <form className={styles.form}>
        <label htmlFor="name">nome:</label>
        <input
          type="text"
          placeholder={info.name ? info.name : "Nome"}
          onChange={(e) => {
            setName(e.target.value);
            update();
          }}
          value={info.name}
        />
        
        <label htmlFor="age">telefone:</label>
        <input
          type="number"
          placeholder={info.age ? info.age : "Idade"}
          onChange={(e) => {
            setAge(e.target.value);
            update();
          }}
          value={info.age}
        />
        
        <label htmlFor="city">cidade:</label>
        <input
          type="text"
          placeholder={info.city ? info.city : "Cidade"}
          onChange={(e) => {
            setCity(e.target.value);
            update();
          }}
          value={info.city}
        />
        
        <label htmlFor="art">arte:</label>
        <input
          type="text"
          placeholder={info.art ? info.art : "Arte"}
          onChange={(e) => {
            setArt(e.target.value);
            update();
          }}
          value={info.art}
        />
        <label htmlFor="bio">Biografia:</label>
        <textarea  className={styles.textarea}
          rows="10" 
          placeholder={info.Bio ? info.Bio : "Bio"}
          onChange={(e) => {
            setBio(e.target.value);
            update();
          }}
          value={info.Bio}
        ></textarea>

        {/* Novo input para a foto de perfil */}
        <label htmlFor="profile-picture">foto de perfil:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setProfilePicture(e.target.files[0]);
            update();
          }}
        />

        {/* Novo input para a foto de capa */}
        <label htmlFor="cover-photo">foto de capa:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setCoverPhoto(e.target.files[0]);
            update();
          }}
        />
        <div className={styles.ContainersubmitButton}>
            <input className={styles.submitButton} type="submit" value="salvar mudanças" />
        </div>
      </form>
  
    </div>
  );
}

export default EditPerfil;
