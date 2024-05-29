// Historial.js
import React from 'react';
import styles from './Historial.module.css';

const events = [
  { date: '2020-01-01', title: 'Evento 1', description: 'Descripción del evento 1' },
  { date: '2020-06-01', title: 'Evento 2', description: 'Descripción del evento 2' },
  { date: '2021-01-01', title: 'Evento 3', description: 'Descripción del evento 3' },
  { date: '2021-06-01', title: 'Evento 4', description: 'Descripción del evento 4' },
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
