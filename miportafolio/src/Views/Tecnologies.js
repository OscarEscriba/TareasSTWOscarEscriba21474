// Technologies.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import ProgressBar from './ProgressBar';
import styles from './Technologies.module.css';
import html from './HTML.png';
import css from './CSSLogo.png';
import javascript from './JS.png';
import reactIcon from './React.png';
import vue from './Vue.png';
import firebase from './Firebase.png';
import express from './Express.png';

const technologies = [
  { name: 'HTML', percentage: 90, icon: html },
  { name: 'CSS', percentage: 90, icon: css },
  { name: 'JavaScript', percentage: 80, icon: javascript },
  { name: 'React', percentage: 80, icon: reactIcon },
  { name: 'Vue', percentage: 90, icon: vue },
  { name: 'Firebase', percentage: 90, icon: firebase },
  { name: 'Express.js', percentage: 50, icon: express }
];

const Technologies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsVisible(true);
  }; 

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    autoplay: true,
    autoplaySpeed: 1200,
  };

  return (
    <div className={styles.technologiesContainer} onMouseEnter={handleMouseEnter}>
      <h2>Tecnologías</h2>
      <Slider {...settings} className={styles.slider}>
        {technologies.map((tech, index) => (
          <div key={index} className={`${styles.techItem} ${index === currentSlide ? styles.active : ''}`}>
            <div className={styles.techDetails}>
              <img className={styles.imgIcon} src={tech.icon} alt={tech.name} />
            </div>
            <ProgressBar name={tech.name} percentage={tech.percentage} isVisible={isVisible}  />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Technologies;
