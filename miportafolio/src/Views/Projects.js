import React, { useState } from 'react';
import styles from './Projects.module.css'; // Importa los estilos CSS

// Define la lista de proyectos con sus detalles
const projects = [
  {
    id: 1,
    name: 'Proyecto 1',
    technology: 'React',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Proyecto 2',
    technology: 'Vue.js',
    description: 'Pellentesque at sodales quam. Maecenas blandit odio sed est semper interdum.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    name: 'Proyecto 3',
    technology: 'Angular',
    description: 'Vestibulum sit amet sapien in magna elementum malesuada vel nec justo.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    name: 'Proyecto 4',
    technology: 'Angular',
    description: 'Vestibulum sit amet sapien in magna elementum malesuada vel nec justo.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    name: 'Proyecto 5',
    technology: 'Angular',
    description: 'Vestibulum sit amet sapien in magna elementum malesuada vel nec justo.',
    image: 'https://via.placeholder.com/300x200',
  }
  // Agrega más proyectos según sea necesario
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null); // Estado para almacenar el proyecto seleccionado

  // Función para manejar el clic en un proyecto
  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId); // Actualiza el proyecto seleccionado
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.projectsContainer}>
      <h2>Proyectos</h2>
      <div className={styles.gridContainer}>
        <div className={styles.column}>
          {/* Renderiza los proyectos de la primera columna */}
          {projects.slice(0, 2).map((project) => (
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
          {/* Renderiza el proyecto central */}
          <div
            key={projects[2].id}
            className={`${styles.projectItem} ${selectedProject === projects[2].id ? styles.selected : ''}`}
            onClick={() => handleProjectClick(projects[2].id)}
          >
            <img src={projects[2].image} alt={projects[2].name} />
            <div className={styles.projectOverlay}>
              <h3>{projects[2].name}</h3>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          {/* Renderiza los proyectos de la tercera columna */}
          {projects.slice(3).map((project) => (
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
      {/* Renderiza la tarjeta emergente si hay un proyecto seleccionado */}
      {selectedProject && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h2>{projects.find((project) => project.id === selectedProject).name}</h2>
            <p>Tecnología utilizada: {projects.find((project) => project.id === selectedProject).technology}</p>
            <p>{projects.find((project) => project.id === selectedProject).description}</p>
            <img src={projects.find((project) => project.id === selectedProject).image} alt="Project" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
