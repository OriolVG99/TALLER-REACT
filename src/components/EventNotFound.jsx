import { Link } from "react-router-dom";

const EventNotFound = () => (
    //Missatges d'error
  <div className="container mt-5 text-center">
    <h1 className="fw-bold">No s'ha trobat</h1>
    <h5>L'esdeveniment sol·licitat no existeix.</h5>

    <div className="mt-4">
    {/*Botons per tornar*/}
      <Link to="/" className="btn btn-primary me-3">
        Inici
      </Link>
      <Link to="/events" className="btn btn-outline-secondary">
        Tornar a la llista
      </Link>
    </div>
  </div>
);

export default EventNotFound;