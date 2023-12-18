import React from 'react'
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import { GitHub, Link } from '@mui/icons-material';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img src={project.image} />
            <div className="proj-body">
                <p className='desc'>
                    {project.description}
                </p>
                <div className='proj-skills'>
                    <p style={{ fontWeight: 700, fontSize: '24px', margin: '10px 10px 10px 0' }}>
                        Skills:
                    </p> 
                    {project.skills.map(skill => (
                        <p><span className='badge'>{skill}</span></p>
                    ))}
                </div>
            </div>
            <div>
                <a href={project.githubLink} target='_blank'><GitHub /></a>
                <a href={project.demoLink} target='_blank'><Link /></a>
            </div>

        </div>
    );
}

export default ProjectDisplay