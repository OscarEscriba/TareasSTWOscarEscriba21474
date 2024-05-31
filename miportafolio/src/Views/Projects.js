// Projects.js
import React, { useState } from 'react';
import styles from './Projects.module.css'; // Importa los estilos CSS
import css from './CSS.jpg'; 
import blog from './blog.jpg';
import calculadora from './calculadora.jpg';
import clinica from './Clinica.jpg';
import chat from './Chat.jpg';
import HistorialHTML from './HistorialHTML.jpg';
import radar from './radar.jpg';

const projects = [
  {
    id: 1,
    name: 'Primer trabajo en CSS',
    technology: 'CSS',
    description: (
      <p>
        Este trabajo me permitió desarrollar mis habilidades con CSS <br/>
        lo pongo dentro de mi portafolio, ya que lo considero de suma importancia en el inicio del proceso de <br/>
        aprendizaje de dicha tecnología.
      </p>
    ),
    image: css,
  },
  {
    id: 2,
    name: 'Blog',
    technology: 'React y Firebase',
    description: (
      <p>
        Este proyecto fue realizado con el fin en mente de <br/> 
        crear un blog en donde los usuarios pudieran realizar <br/> 
        publicaciones acerca de sus temas tecnologicos de interes <br/> 
        <br/> 
        Este fue creado con react para el frontend y Firebase para <br/> 
        el backend, utilizando FireStore como base de datos y las functions <br/> 
        para crear una especie de API para realizar consultas en la misma. <br/> 
      </p>
    ),
    image: blog,
  },
  {
    id: 3,
    name: 'Clinica los Angeles',
    technology: 'Vue.js y Firebase',
    description: (
      <p>
        Este fue el primer trabajo como profesional en el que he estado <br/> 
        directamente involucrado. <br/> 
        El mismo consta de una aplicacion web que ayudara para la administracion <br/> 
        de una clinica medica. <br/> 
        <br/> 
        Este proyecto tuvo una curva de aprendizaje grande, debido a no tener conocimiento <br/> 
        acerca de vue. <br/> 
        Al final pudimos implementar de una optima manera firestore de firebase y se planea seguir <br/> 
        implementando servicios de google. <br/> 
      </p>
    ),
    image: clinica,
  },
  {
    id: 4,
    name: 'Calculadora',
    technology: 'React y test',
    description: (
      <p>
        Este trabajo nos sirvio para indagar en el mundo de <br/> 
        los test, los cuales son de mucha ayuda para darle manetenimiento <br/> 
        a nuestro codigo y garantizar su continuidad a lo largo de los años. <br/> 
        <br/> 
        También nos ayudó a desarrollar y seguir practicando las habilidades <br/> 
        lógicas para trabajar en javascript. <br/> 
      </p>
    ),
    image: calculadora,
  },
  {
    id: 5,
    name: 'Chat Grupal',
    technology: 'JS y APIRest',
    description: (
      <p>
        Este fue el primer proyecto en el que utilizamos e <br/> 
        implementamos lo que fue un API, con el mismo <br/> 
        nos enseñaron poco a poco en como crear una por nuestro <br/> 
        lado y como realizar consultas CRUD a la misma. <br/> 
        Así mismo, desarrollamos habilidades en JS y css. <br/> 
      </p>
    ), 
    image: chat,
  },
  {
    id: 6,
    name: 'Primer trabajo HTML',
    technology: 'HTML',
    description: (
      <p>
        En este proyecto trabajamos todas las etiquetas y herramientas que<br/>
        nos ofrece html para poder crear paginas web.<br/>
        Este proyecto me gusto porque fue de las primeras cosas en las <br/>
        que ponia especial atencion a la parte del html y me doy cuenta <br/>
        como puedo organizar de mejor manera las cosas.<br/>
      </p>
    ),
    image:HistorialHTML, // Cambia esto con la ruta de la imagen correcta
  },
  {
    id: 7,
    name: 'Radar',
    technology: 'React y firebase',
    description: (
      <p>
        Este proyeco consistio en hacer un radar que mostrara la ubicacion de<br/>
        las demas personas en relacion con la mia <br/>
        Para ello utilizamos google Functions para mi api <br/>
        y firestore en mi base de datos, para que la aplicacion<br/>
        al momento de logearnos, nos permitiera dar nuestra ubicacion y mostrarla<br/>
      </p>
    ),
    image: radar, // Cambia esto con la ruta de la imagen correcta
  }
];
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.projectsContainer} id='projects'>
      <h2 style={{ textAlign: 'center', fontSize: '2.5em', fontFamily: 'cursive' }}>Proyectos y Laboratorios</h2>
      <div className={styles.gridContainer}>
        <div className={styles.column}>
          {projects.slice(0, Math.ceil(projects.length / 3)).map((project) => (
            <div
              key={project.id}
              className={`${styles.projectItem} ${selectedProject === project.id ? styles.selected : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <img src={project.image} alt={project.name} />
              <div className={styles.projectOverlay}>
                <h3>{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.column} ${styles.middleColumn}`}>
          {projects.slice(Math.ceil(projects.length / 3), Math.ceil((2 * projects.length) / 3)).map((project) => (
            <div
              key={project.id}
              className={`${styles.projectItem} ${selectedProject === project.id ? styles.selected : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <img src={project.image} alt={project.name} />
              <div className={styles.projectOverlay}>
                <h3>{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {projects.slice(Math.ceil((2 * projects.length) / 3)).map((project) => (
            <div
              key={project.id}
              className={`${styles.projectItem} ${selectedProject === project.id ? styles.selected : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <img src={project.image} alt={project.name} />
              <div className={styles.projectOverlay}>
                <h3>{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h2>{projects.find((project) => project.id === selectedProject).name}</h2>
            <p>Tecnología utilizada: {projects.find((project) => project.id === selectedProject).technology}</p>
            <p>{projects.find((project) => project.id === selectedProject).description}</p>
            <img src={projects.find((project) => project.id === selectedProject).image} alt="Project"
              style={{ maxWidth: '100%', maxHeight: '300px' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
