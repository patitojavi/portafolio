import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { name: 'home', path: '/' },
  { name: 'proyectos', path: '/projects' },
  { name: 'sobre-mi', path: '/about' },
  { name: 'contacto', path: '/contact' },
  { name: 'favoritos', path: '/favorites' },
];

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ☰ Botón solo visible en sm, y solo si el menú no está abierto */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 bg-green-800 text-white p-2 rounded"
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-48 bg-black border-r border-green-700 p-4 text-green-500 font-mono
          transform transition-transform duration-300 z-40
          ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block
        `}
      >
        <h1 className="text-green-400 text-xl mb-6 font-bold">~/patitojavi-portafolio</h1>
        <nav className="flex flex-col space-y-3">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)} // Al hacer click, cerrar el menú
              className={`hover:text-green-300 ${
                location.pathname === link.path ? 'text-green-300' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
