import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        <div className="project">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1...</p>
        </div>
        <div className="project">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
