import React from 'react';
import styles from './Voting.module.css';

const VotingForm = () => {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          <span>Crear</span> una votacion:
        </h1>
        <div className={styles.contact_wrapper}>
          <div className={styles.contact_form}>
            <div className={styles.contact_info}>
              <h3>Banner para la votacion:</h3>
              <form action="" method="post">
                <p>
                  <label>Subir imagen:</label>
                  <input className={styles.subirImagen} type="file" name="archivosubido" />
                </p>
                <p>
                  <label>Título:</label>
                  <input type="text" name="titulo" placeholder="Titulo de la votacion" />
                </p>
                <p>
                  <label>Descripcion:</label>
                  <textarea
                    name="texto"
                    rows="4"
                    cols="40"
                    placeholder="Descripcion breve de la votacion"
                  />
                </p>
                <p>
                  <label>Tiempo:</label>
                  <input className={styles.tiempo} type="time" name="minutos" />
                </p>
                <p>
                  <label>Tipo de Votacion:</label>
                  <br />

                  <label>Por seleccion:</label>
                  <input type="radio" name="boton" value="1" />

                  <label>Por puntuacion:</label>
                  <input type="radio" name="boton" value="2" />
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.title}>
        {' '}
        <h1>Crear una votacion:</h1>
      </div>
      <section className={styles.section}>
        <div>
          <form action="" method="post">
            <h3>Banner para la votacion:</h3>
            Subir imagen:
            <input type="file" name="archivosubido" />
            <input type="submit" value="Enviar datos" />
          </form>
        </div>
        <div>
          {' '}
          <h3>
            Titulo: <input type="text" name="title" placeholder="Titulo de la votacion" />
          </h3>
          <h3>Descripcion:</h3>
          <textarea
            name="texto"
            rows="4"
            cols="40"
            placeholder="Descripcion breve de la votacion"
          />
          <h3>
            Tiempo: <input type="time" name="minutos" />
          </h3>
          <h3>Tipo de votacion:</h3>
          <input type="radio" name="boton" value="1" />
          Por seleccion:
          <input type="radio" name="boton" value="2" />
          Por puntuacion:
        </div>
        <br />
        <div>
          {' '}
          <button className={styles.button}>Crear</button>
        </div>
      </section> */}
    </>
  );
};
export default VotingForm;
