import djImage from '../imatges/dj.jpg'; //Import de l'imatge

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center text-center text-md-start">
        
        {/* Columna de la imatge */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={djImage}
            alt="DJ"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Columna de text i boto */}
        <div className="col-md-6">
          <h1 className="display-4 text-primary mb-3">🎵 Diccionari Musical 🎵</h1>
          <p className="lead mb-4">
            Benvinguts a la nostra aplicació d'esdeveniments musicals! Aquí podràs explorar informació sobre cançons, artistes i estils musicals. Tot el que necessites per descobrir nova música, en un sol lloc.
          </p>
          <button className="btn btn-primary btn-lg">Entrar a l'app</button>
        </div>

      </div>
    </div>
  );
}

export default About;