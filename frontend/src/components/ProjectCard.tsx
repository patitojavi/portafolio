type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  repoLink?: string;
  status?: "En desarrollo" | "Completo";
};

const ProjectCard = ({ title, description, tech, repoLink, status }: ProjectCardProps) => {
  return (
    <div className="border border-green-700 bg-black p-4 rounded shadow-md hover:border-green-400 transition-colors">
      <h3 className="text-xl text-green-400 font-bold mb-2">{title}</h3>
      <p className="text-green-300 mb-2">{description}</p>
      <div className="text-green-200 text-sm mb-2">
        <span className="font-bold">Tecnologías:</span> {tech.join(', ')}
      </div>
      {status && (
        <div className="text-yellow-400 text-xs italic mb-2">Estado: {status}</div>
      )}
      {repoLink ? (
        <a
          href={repoLink}
          target="_blank"
          className="text-green-400 underline hover:text-green-200"
        >
          Ver en GitHub →
        </a>
      ) : (
        <span className="text-green-700 text-sm italic">Repositorio privado</span>
      )}
    </div>
  );
};

export default ProjectCard;
