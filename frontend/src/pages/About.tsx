import SkillBadge from '../components/SkillBadge';

const categorizedSkills: Record<string, string[]> = {
  "Lenguajes": ["JavaScript", "TypeScript", "Python"],
  "Frontend": ["HTML", "CSS", "React", "Vite", "Tailwind CSS"],
  "Backend": ["Node.js"],
  "Bases de Datos": ["MySQL", "MongoDB"],
  "Herramientas / DevOps": ["Docker", "Linux"],
};

const About = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl text-green-400">~/sobre-mi</h2>

      <p className="text-green-300 max-w-xl">
        Soy desarrollador autodidacta en formación, interesado en construir
        aplicaciones web modernas, funcionales y con buen diseño. Me gusta trabajar con tecnologías actuales del ecosistema JavaScript tanto en frontend como backend.
      </p>

      <div>
        <h3 className="text-xl text-green-400 mb-2">Tecnologías que manejo:</h3>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="mb-4">
            <h4 className="text-green-300 font-bold mb-1">{category}</h4>
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
