import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import PerfilAuth from "../components_privates/PerfilAuth";
import LogoutButton from "../components_public/LogoutButton";
import { productContext } from "../Context/productContext";

const Miperfil = () => {
  const { user, isAuthenticated } = useAuth0();
  const { publicacion } = useContext(productContext);

  return (
    <>
      {isAuthenticated ? (
        <div className="container bg-light ">
          <h1 className="mt-4 text-center p-5">Hola,{user.name}</h1>
          <div className="row ">
            <div className="col-10 col-md-6 mx-auto">
              <div style={{ width: "100%" }} className="card p-3 ">
                <div className="text-center">
                  <img
                    src={user.picture}
                    className="rounded-circle"
                    alt={user.name}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Mi Perfil de Usuario
                  </h5>
                  <hr />
                  <p className="card-text">
                    <span>Total de publicaciones: </span> {publicacion.length}
                    <hr />
                  </p>
                  <p className="card-text">
                    <span>Usuario :{user.nickname}</span>
                  </p>
                  <p className="card-text">
                    <span>Email: {user.email}</span>
                  </p>
                  <hr />
                  <p className="card-text">
                    <small className="text-muted">
                      Logueado como :{user.name}
                    </small>
                  </p>
                </div>
                <div className="text-center">
                  <LogoutButton />
                </div>

                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      ) : (
        <PerfilAuth />
      )}
    </>
  );
};

export default Miperfil;
