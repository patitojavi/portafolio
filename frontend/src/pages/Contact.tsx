import {
  FaLinkedin, FaInstagram, FaTwitch, FaYoutube, FaDiscord, FaReddit, FaGithub
} from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/patricio-benavides/",
  },
  {
    name: "Twitch",
    icon: <FaTwitch />,
    url: "https://www.twitch.tv/potitojavi",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@patitojavi286",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/potitojavii/",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    url: "https://discord.com/users/potitojavi",
  },
  {
    name: "Reddit",
    icon: <FaReddit />,
    url: "https://www.reddit.com/user/PatitoJavi/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/patitojavi"
  }
];

const Contact = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl text-green-400">~/contacto</h2>

      <p className="text-green-300 max-w-xl">
        Puedes contactarme o seguirme en las siguientes plataformas:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {socialLinks.map(({ name, icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-green-700 rounded px-4 py-2 font-mono text-green-300 bg-black hover:text-green-100 hover:border-green-400 transition-colors"
          >
            <span className="text-lg">{icon}</span>
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
