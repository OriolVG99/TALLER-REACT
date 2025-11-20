import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Nom de l'app */}
        <Link className="navbar-brand" to="/">Diccionari Musical</Link>

        {/* Boto responsive */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enllaços */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inici</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events">Esdeveniments</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Contacte</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;