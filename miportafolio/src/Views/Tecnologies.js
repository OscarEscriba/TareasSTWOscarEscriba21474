// Technologies.js
import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import styles from './Technologies.module.css';
import instagram from './instagram.png'; // Importa la imagen
import js from './JS.png';
import html from './HTML.png';
import CSS from './CSSLogo.png';
import react from './React.png';
import vue from './Vue.png';
import firebase from './Firebase.png';
import Express from './Express.png';

const technologies = [
  { name: 'HTML', percentage: 90, icon: html },
  { name: 'CSS', percentage: 90, icon: CSS },
  { name: 'JavaScript', percentage: 80, icon: js },
  { name: 'React', percentage: 80, icon: react },
  { name: 'Vue', percentage: 90, icon: vue },
  { name: 'Firebase', percentage: 90, icon: firebase },
  { name: 'Express.js', percentage: 50, icon: Express }
];


const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  return (
    <div className={styles.technologiesContainer} onMouseEnter={handleMouseEnter}>
      <h2>Tecnologías</h2>
      <div className={styles.gridContainer}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techItem}>
                      <div className={styles.techDetails}>
            <img className={styles.imgIcon} src={tech.icon} alt={tech.name} />
            </div>
            <ProgressBar name={tech.name} percentage={tech.percentage} isVisible={isVisible} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
