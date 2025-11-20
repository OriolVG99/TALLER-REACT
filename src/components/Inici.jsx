const Inici = () => (
  <div className="container mt-5">
    <div className="row align-items-center">
      {/* Columna de text a la esquerra */}
      <div className="col-md-6">
        <h1 className="fw-bold">Benvingut a OriolMusic</h1>
        <p>
          Explora els esdeveniments musicals en viu i descobreix nous artistes.<br></br>
          OriolMusic es la teva plataforma per connectar amb la música que estimes.
        </p>
        <p>
          Aqui trobaras concerts, festivals i experiencies uniques que et faran vibrar.<br></br>
          Uneix-te a la comunitat i viu la música com mai abans!
        </p>
      </div>

      {/* Columna d'imatge a la dreta */}
      <div className="col-md-6 text-center">
        <img
          src="src/imatges/logo.png"
          alt="Logo OriolMusic"
          className="img-fluid"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  </div>
);

export default Inici;