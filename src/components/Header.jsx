import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../App";

const Header = () => {
  const { usuari, setUsuari } = useContext(UserContext);

  const handleLogout = () => {
    setUsuari(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Nom de l'app */}
        <Link className="navbar-brand fw-bold" to="/">LiveManager</Link>

        {/* Boto responsive */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enllaços */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link fw-bold" style={{ color: "white" }} to="/">Inici</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events">Esdeveniments</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Contacte</Link></li>

            {usuari && (
              <li className="nav-item d-flex align-items-center text-white me-3 fw-bold mx-2">
                <i className="bi bi-person-circle me-1"></i> {usuari.username}
              </li>
            )}

            {usuari && (
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="nav-link text-white d-flex align-items-center fw-bold"
                >
                  <i className="bi bi-box-arrow-right me-1"></i> Sortir
                </Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;