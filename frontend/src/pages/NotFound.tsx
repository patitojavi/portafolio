import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-red-500">~/error</h2>
      <p className="mt-4 text-green-300 font-mono">
        Comando no encontrado: <span className="text-green-400">"ruta inválida"</span>
      </p>
      <p className="mt-2 text-green-300">
        Puedes volver al <Link to="/" className="text-green-400 underline hover:text-green-200">inicio</Link>.
      </p>
    </div>
  );
};

export default NotFound;
