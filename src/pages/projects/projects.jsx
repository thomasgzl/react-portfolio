import { projects } from '../../const';
import React from 'react'

const projectsList = projects.map((project) => (
  <li key={project.id}>
    {project.title}
    <div>{project.duration}</div>
  </li>
));

function ProjectsPage() {
  return <ul>{projectsList}</ul>;
}

export default ProjectsPage;
