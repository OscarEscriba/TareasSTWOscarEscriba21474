// Historial.js
import React from 'react';
import styles from './Historial.module.css';

const events = [
  { date: 'Octubre, 2020', title: 'Me gradué del Colegio', description: 'me gradué de bachiller en ciencias y letras con Orientación en computación. Desde este momento sabía que la programación iba a ser parte importante de mi vida' },
  { date: 'Enero 2021', title: 'Ingresé a UVG', description: 'Inicialmente ingresé a Ingeniería mecatrónica, pero poco a poco me fui dando cuenta de mi verdadera pasión' },
  { date: 'Noviembre, 2022', title: 'Primer curso de Programación', description: 'Como parte de la curiosidad que me despertaba la programación, decidí realizar mi primer curso independiente de JavaScript. En donde tuve una introducción a los frameworks de desarrollo y al desarrollo web' },
  { date: 'Julio, 2023', title: 'Inicio la ingenieria en Ciencias de la computación', description: 'Logré tomar la decisión de cambiarme a ingeniería en ciencias de la computación, terminando de confirmar lo que más me gustaba hacer, que era programar.' },
  { date: 'Diciembre, 2023', title: 'Me involucro en mi primer proyecto profesional', description: 'Gracias al cambio mencionado anteriormente, me involucré en mi primer proyecto profesional. Dicho proyecto  me ayudó a saber que parte del desarrollo web me gusta más y a aprender nuevas tecnologías.' },
  // Agrega más eventos según sea necesario
];

const Historial = () => {
  return (
    <div className={styles.timelineContainer}>
      <h2>Historial</h2>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div key={index} className={`${styles.timelineEvent} ${styles.animateOnHover}`}>
            <div className={index % 2 === 0 ? styles.left : styles.right}>
              <div className={styles.eventContent}>
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
            <div className={styles.dot}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historial;
