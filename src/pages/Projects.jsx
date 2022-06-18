import React from 'react'

import projectList from '../data/projectList'
import Header from '../components/Header'
import '../css/Projects.css'

function Projects () {
  return (
    <div id='projects'>
      <Header />
      <div id='projects-container'>
        <h2 id='projects-title'>Acervo de projetos</h2>
        {
          projectList.map((project) => {
            return (
            <div
              key={project.projectId}
              className='project-container'
            >
              <h3>Projeto {project.projectId}</h3>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects
