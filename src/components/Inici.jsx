import { Link } from 'react-router-dom';
const Inici = () => (
  <div className="container mt-5">
    <div className="row align-items-center">
      {/* Columna de text a la esquerra */}
      <div className="col-md-6">
        <h1 className="fw-bold mb-4" style={{ fontSize: "65px", lineHeight: "1.2" }}>Esdeveniments en viu</h1>
        <h5 className='mb-4'>
          Descobreix els millors concerts i esdeveniments msicals.<br></br>
          Gestiona la teva agenda cultural i no et perdis cap espectacle.
        </h5>
        {/* Botons amb enllaços */}
        <Link to="/events" className="btn btn-primary me-2 btn-lg">Veure esdeveniments</Link>
        <Link to="/about" className="btn btn-outline-secondary btn-lg">Contacte</Link>
      </div>

      {/* Columna d'imatge a la dreta */}
      <div className="col-md-6 text-center">
        <img
          src="src/imatges/foto.png"
          alt="Logo OriolMusic"
          className="img-fluid rounded"
          style={{ maxWidth: "1000px" }}
        />
      </div>
    </div>
  </div>
);

export default Inici;