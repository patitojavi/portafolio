import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiVite,
  SiTailwindcss, SiNodedotjs, SiPython, SiMysql, SiMongodb,
  SiDocker,
  SiLinux
} from "react-icons/si";

type SkillBadgeProps = {
  name: string;
};

const icons: Record<string, React.ReactElement> = {
  HTML: <SiHtml5 className="mr-1" />,
  CSS: <SiCss3 className="mr-1" />,
  JavaScript: <SiJavascript className="mr-1" />,
  TypeScript: <SiTypescript className="mr-1" />,
  React: <SiReact className="mr-1" />,
  Vite: <SiVite className="mr-1" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1" />,
  "Node.js": <SiNodedotjs className="mr-1" />,
  Python: <SiPython className="mr-1" />,
  MySQL: <SiMysql className="mr-1" />,
  MongoDB: <SiMongodb className="mr-1" />,
  Docker: <SiDocker className="mr-1"/>, 
  Linux: <SiLinux className="mr-1"/>
};

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <span className="inline-flex items-center bg-green-900 text-green-300 border border-green-600 rounded px-3 py-1 text-sm font-mono m-1">
      {icons[name]} {name}
    </span>
  );
};

export default SkillBadge;
