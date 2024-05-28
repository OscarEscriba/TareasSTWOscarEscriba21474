// ProgressBar.js
import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ name, percentage, isVisible, icon }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${isVisible ? percentage : 0}%` }}></div>
      </div>
      <div className={styles.label}>
        <span>{icon}</span> {/* Añadir el icono aquí */}
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;

