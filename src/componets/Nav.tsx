import "../styles/body.css";

interface NavProps {
  className?: string;
  style?: React.CSSProperties;
}

const Nav: React.FC<NavProps> = () => {
  const links = [
    { href: "#", text: "FlowCanvas" },
    { href: "#", text: "Zone" },
    { href: "#", text: "ShowCase" },
    { href: "#", text: "Hub" },
    { href: "#", text: "Market" },
    { href: "#", text: "Exchange" },
    { href: "#", text: "Sign Up" },
    { href: "#", text: "Login" },

    // Add more links as needed
  ];
  return (
    <ul className="nav">
      {links.map((link) => (
        <li>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
