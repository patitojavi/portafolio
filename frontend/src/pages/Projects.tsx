import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl text-green-400 mb-4">~/proyectos</h2>

      <ProjectCard
        title="Plataforma de Microlearning Empresarial SkilLBits"
        description="Plataforma de Microlearning Empresarial es una solución innovadora diseñada para capacitar empleados mediante sesiones breves y dinámicas. La plataforma incluye evaluaciones exprés, un sistema de recompensas y herramientas de gestión para administradores e instructores. Está desarrollada con tecnologías modernas como React, Node.js y MongoDB, siguiendo una arquitectura cliente-servidor desacoplada."
        tech={["React", "Vite", "TypeScript", "Node.js", "Express", "MongoDB"]}
        repoLink="https://github.com/patitojavi/plataforma-microlearning"
        status="En desarrollo"
      />

      {/* Aquí puedes agregar más tarjetas en el futuro */}
    </div>
  );
};

export default Projects;
