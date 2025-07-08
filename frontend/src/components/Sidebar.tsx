import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'home', path: '/' },
  { name: 'proyectos', path: '/projects' },
  { name: 'sobre-mi', path: '/about' },
  { name: 'contacto', path: '/contact' },
  { name: 'favoritos', path: '/favorites' },

];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-48 min-h-screen bg-black border-r border-green-700 p-4 text-green-500 font-mono fixed left-0 top-0">
      <h1 className="text-green-400 text-xl mb-6 font-bold">~/patitojavi-portafolio</h1>
      <nav className="flex flex-col space-y-3">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`hover:text-green-300 ${
              location.pathname === link.path ? 'text-green-300' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
