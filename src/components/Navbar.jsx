import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Kodigo Music</h1>
      <ul>
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/library">Biblioteca</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
