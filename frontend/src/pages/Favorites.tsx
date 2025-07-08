const Favorites = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl text-green-400">~/favoritos</h2>

      <section>
        <h3 className="text-green-300 font-bold mb-2">🎮 Juegos favoritos</h3>
        <ul className="list-disc list-inside text-green-200">
          <li>Dead By Daylight</li>
          <li>Minecraft</li>
          <li>Efootball2025</li>
          <li>PUBG</li>
        </ul>
      </section>

      <section>
        <h3 className="text-green-300 font-bold mb-2">🎵 Música y artistas</h3>
        <ul className="list-disc list-inside text-green-200">
          <li>Arctic Monkeys</li>
          <li>The Neighbourhood</li>
          <li>Twenty One Pilots</li>
        </ul>
      </section>

      <section>
        <h3 className="text-green-300 font-bold mb-2">🎥 Otras cosas que me gustan</h3>
        <ul className="list-disc list-inside text-green-200">
          <li>Mi novia 🤍</li>
          <li>Ver series</li>
          <li>Editar videos</li>
          <li>Jugar a la Pelota</li>
          <li>Escuchar música</li>
        </ul>
      </section>
    </div>
  );
};

export default Favorites;
