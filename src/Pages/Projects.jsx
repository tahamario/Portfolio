import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectList } from '../helpers/ProjectList'
import '../styles/Projects.css'

function Projects() {
    return (
        <div className='projects'>
            <h1>
                This is Projects page
            </h1>
            <div className='projectList'>
                {projectList.map((project, index) => (
                    <ProjectItem key={index}
                        id={index}
                        image={project.image}
                        name={project.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects