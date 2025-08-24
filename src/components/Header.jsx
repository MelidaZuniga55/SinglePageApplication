import { Link } from 'react-router-dom';

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo">🎵 Kodigo Music</Link>
        </div>
        
        <nav className="nav">
          <div className="nav-container">
            <Link to="/" className="nav-btn">
              <span>🏠 Inicio</span>
            </Link>
            <Link to="/discover" className="nav-btn">
              <span>🔍 Descubrir</span>
            </Link>
            <Link to="/library" className="nav-btn">
              <span>📚 Biblioteca</span>
            </Link>
            <Link to="/search" className="nav-btn">
              <span>🔎 Buscar</span>
            </Link>
          </div>
        </nav>
        
        <div className="user-section">
          <div className="user-profile">
            <div className="user-avatar">
              {user?.name?.charAt(0).toUpperCase() || '👤'}
            </div>
            <div className="user-info">
              <span className="user-name">{user?.name || 'Invitado'}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;