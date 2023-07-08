import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import ForminicioSession from "../components_public/ForminicioSession";
import "../CSS/formcss.css";

const InicioSesion = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <ForminicioSession />
            <div className="registrarse">
              <br />
              <p className="text-center mx-auto  ">
                Inicia Sesion en Google y/o Github
              </p>
              <div className="d-flex justify-content-center p-2">
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => loginWithRedirect()}
                  className="me-2"
                  src="https://cdn-icons-png.flaticon.com/32/300/300221.png"
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => loginWithRedirect()}
                  src="https://cdn-icons-png.flaticon.com/32/733/733609.png"
                  alt=""
                />
              </div>

              <p className="text-center ">¿Aun no tienes Cuenta?</p>
              <Link style={{ textDecoration: "none" }} to="/registro">
                <p className="text-center ">!Registrate¡</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InicioSesion;
