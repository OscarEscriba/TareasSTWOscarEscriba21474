// ProgressBar.js

import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ name, percentage, isVisible, onMouseEnter }) => {
  return (
    <div className={styles.progressBarContainer} onMouseEnter={onMouseEnter}>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${isVisible ? percentage : 0}%` }}></div>
      </div>
      <div className={styles.label}>
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
