import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-green-400 mb-4">~/proyectos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Plataforma de Microlearning Empresarial"
          description="App web para capacitar empleados con microcursos, evaluaciones y recompensas."
          tech={["React", "Vite", "TypeScript", "Node.js", "Express", "MongoDB"]}
          repoLink="https://github.com/patitojavi/microlearning"
          status="En desarrollo"
        />

        {/* Puedes agregar más ProjectCard aquí */}
      </div>
    </div>
  );
};

export default Projects;
