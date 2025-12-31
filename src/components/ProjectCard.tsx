
import "../styles/projects.css";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
};

function ProjectCard({ title, description, image, demoLink, githubLink }: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-buttons">
          <a href={demoLink || "#"} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Live Demo
          </a>
          <a href={githubLink || "#"} target="_blank" rel="noopener noreferrer" className="btn-solid">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

