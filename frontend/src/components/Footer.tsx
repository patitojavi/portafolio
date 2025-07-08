import {
  FaLinkedin, FaInstagram, FaTwitch, FaYoutube, FaDiscord, FaReddit,
  FaGithub
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

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-700 text-sm py-4 px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-green-500 mb-2 sm:mb-0">
          └─ © {new Date().getFullYear()} ~ patitojavi-portafolio
        </div>
        <div className="flex flex-wrap gap-4 text-green-400">
          {socialLinks.map(({ name, icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-green-200"
            >
              <span className="mr-1">{icon}</span>
              <span className="text-xs hidden sm:inline">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
