import projectData from "../../app/data";
import Image from "next/image";
import ProjectsStyle from "./style";

const Projects = () => {
  return (
    <ProjectsStyle id="projects">
      <div className="contanier_project">
        <h1>Meus Projetos</h1>
        <ul>
          {projectData.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <Image
                width={350}
                height={250}
                src={project.thumbnail}
                alt={project.title}
              />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver projeto
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ProjectsStyle>
  );
};

export default Projects;
