import React from 'react';
import styles from './home.module.css'; // Importa el CSS Module
import backgroundImage from './FondoHomeL.jpg';
import CV from './CV.pdf';

const Home = () => {
  return (
    <section id="home" className={styles.home} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1>Hola, <br />Soy Oscar Escriba</h1>
          <h2>software developer</h2>
          <a href={CV} download className={styles.cvButton}>Imprimir CV</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
