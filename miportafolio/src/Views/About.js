import React, { useState, useEffect } from 'react';
import styles from './About.module.css'; // Importa el CSS Module
import foto from './Foto.png';
import instagram from './instagram.png';
import github from './github.png';
import linkedin from './linkdn.png';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const texts = [
    "o ingeniería en Ciencias de la computación",
    "ante de la Universidad del Valle de Guatemala"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting && typedText === texts[currentIndex]) {
        setIsDeleting(true);
        setTypingSpeed(50); // Velocidad de borrado más rápida
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setTypingSpeed(100); // Restaurar la velocidad de escritura
        setCurrentIndex((currentIndex + 1) % texts.length);
      }

      if (isDeleting) {
        // Borrar solo una parte del texto antes de comenzar a escribir el siguiente
        setTypedText((prevText) => prevText.slice(0, prevText.length - 1));
      } else {
        // Agregar el siguiente fragmento de texto
        const nextCharIndex = typedText.length;
        const nextFragment = texts[currentIndex].substring(0, nextCharIndex + 1);
        setTypedText(nextFragment);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [typedText, currentIndex, isDeleting, texts, typingSpeed]);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.TituloPrincipal}>
        <h2>ABOUT ME</h2>
        <hr className={styles.divider} /> {/* Línea divisoria */}
      </div> 
  
      <div className={styles.aboutContent}>
        <div className={styles.imageContainer}>
          <div className={styles.photoFrame}>
            <img src={foto} alt="Descripción de la imagen" />
          </div>
          <div className={styles.socialButtons}>
            <a href="https://www.instagram.com/tu_usuario_instagram" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className={styles.socialIcon} />
            </a>
            <a href="https://github.com/tu_usuario_github" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/tu_usuario_linkedin" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.letra}>Oscar Escriba</h3>
          <h4 className={styles.letra}>Estudi{typedText}</h4>
          <p>Estudiante de Ciencias de la Computación en la Universidad del Valle de Guatemala, poseo una sólida formación académica complementada con habilidades autodidactas en programación. A lo largo de mi carrera, he demostrado una capacidad notable para la comunicación efectiva, lo que me ha permitido colaborar de manera eficiente en diversos equipos de trabajo. Mi enfoque en la responsabilidad y el compromiso con mis tareas me ha llevado a participar en proyectos que demandan altos niveles de precisión y dedicación, siempre buscando soluciones innovadoras y eficaces.</p>
          <p>Mi objetivo es continuar ampliando mi experiencia en el desarrollo de software y aplicar mis conocimientos para contribuir de manera significativa a proyectos que generen un impacto positivo en la sociedad. Estoy especialmente interesado en oportunidades que me permitan enfrentar nuevos desafíos tecnológicos y aprender de ellos, así como en colaborar con profesionales del sector para alcanzar metas comunes. Mi pasión por la tecnología y mi deseo de contribuir al bienestar social me impulsan a buscar constantemente formas de mejorar y crecer tanto personal como profesionalmente.</p>
        </div>
      </div>
    </section>
  );
};

export default About;

