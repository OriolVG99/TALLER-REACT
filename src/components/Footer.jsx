import 'bootstrap-icons/font/bootstrap-icons.css';
import logoImage from '../imatges/logo.png'; //Import del logo

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5 fixed-bottom">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        {/* Logo */}
        <div className="mb-2 mb-md-0">
          <img src={logoImage} alt="Logo" style={{ height: '50px' }} />
        </div>

        {/* Text central */}
        <div className="text-center mb-2 mb-md-0">
          &copy; {new Date().getFullYear()} - Tots els drets reservats.
        </div>

        {/* Xarxes socials */}
        <div>
          <a href="https://twitter.com" target="_blank"  rel="noopener noreferrer" className="text-white me-3 fs-5">
            <i className="bi bi-twitter" style={{ color: 'deepskyblue ' }}></i>
          </a>
          <a href="https://instagram.com" target="_blank"  rel="noopener noreferrer" className="me-3 fs-5">
            <i className="bi bi-instagram" style={{ color: 'hotpink' }}></i>
          </a>
          <a href="https://github.com" target="_blank"  rel="noopener noreferrer" className="text-white fs-5">
            <i className="bi bi-github"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;