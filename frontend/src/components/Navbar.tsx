import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-green-500 border-b border-green-700 font-mono">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">~/patitojavi-portafolio</Link>
        </h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-green-300">home</Link></li>
          <li><Link to="/projects" className="hover:text-green-300">proyectos</Link></li>
          <li><Link to="/about" className="hover:text-green-300">sobre-mi</Link></li>
          <li><Link to="/contact" className="hover:text-green-300">contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
