import { useState, useContext } from "react";
import { UserContext } from "../App";

const Login = () => {
  const { setUsuari } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setUsuari({ username });
    } else {
      setError("Contrasenya incorrecta. Prova amb: 1234");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light" style={{ fontSize: "1.1rem" }}    >
      <div className="card shadow-lg p-4" style={{maxWidth: "360px",width: "100%",minHeight: "520px",display: "flex",flexDirection: "column",justifyContent: "center",}}>
        <h2 className="card-title text-center mb-4 fw-bold">LiveManager</h2>

        {error && (
            <div className="text-red mb-3" style={{backgroundColor: "#f5929bff",border: "1px solid #f83232ff",padding: "1rem",borderRadius: "0.5rem",fontWeight: "500"}}>
            {error}
        </div>
        )}


        <p className="text-center text-muted mb-4">Inicia sessió per continuar</p>

        <form onSubmit={handleLogin}>
          {/* Text sobre el camp de nom d'usuari */}
          <p className="mb-1">Nom d'usuari</p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingUsername"
              placeholder="Introdueix el teu nom"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ fontSize: "1.1rem" }}
            />
          </div>

          {/* Text sobre el camp de contrasenya */}
          <p className="mb-1">Contrasenya</p>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Introdueix la contrasenya"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ fontSize: "1.1rem" }}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3" style={{padding: "0.75rem 2rem", minWidth: "150px", fontWeight: "600", fontSize: "1rem"}}>
            Entrar
          </button>

          <p className="text-center text-muted mt-2 mb-0" style={{ fontSize: "0.85rem" }}>
            Pista: usuari = admin
          </p>
          <p className="text-center text-muted mt-2 mb-0" style={{ fontSize: "0.85rem" }}>
            Pista: contrasenya = 1234
          </p>
          
        </form>
      </div>
    </div>
  );
};

export default Login;