const Home = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl text-green-400 mb-4">~/home</h2>
            {/* Frase de bienvenida tipo terminal */}
            <p className="text-green-300 font-mono text-lg">
                ➜ ~ Hola, soy <span className="text-green-400 font-bold">Patricio Benavides</span>. Desarrollador Full Stack en formación.
            </p>

            {/* Resumen breve */}
            <p className="text-green-300 max-w-xl">
                Me gusta crear aplicaciones web modernas usando tecnologías como JavaScript, React, Node.js, MongoDB y Tailwind CSS. Actualmente estoy desarrollando una plataforma de microlearning para empresas.
            </p>

            {/* Botones rápidos */}
            <div className="flex gap-4">
                {/* Botón GitHub */}
                <a
                    href="https://github.com/tuusuario"
                    target="_blank"
                    className="border border-green-500 text-green-300 px-4 py-2 rounded hover:text-green-100 transition-colors"
                >
                    GitHub
                </a>

                {/* Botón Ver CV */}
                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-500 text-green-300 px-4 py-2 rounded hover:text-green-100 transition-colors"
                >
                    Ver CV
                </a>

                {/* Botón Descargar CV */}
                <a
                    href="/cv.pdf"
                    download
                    className="border border-green-500 text-green-300 px-4 py-2 rounded hover:text-green-100 transition-colors"
                >
                    Descargar CV
                </a>
            </div>
        </div>
    );
};

export default Home;
