import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Context/userContext";

//Perfil del usuario autenticado en la pagina

const PerfilAuth = () => {
    const { isAuth, users, setIsAuth, setUsers } = useContext(userContext);
    console.log(users);

    const navigate = useNavigate();

    return (
        <>
            {isAuth
                ? users.map((item, index) => (
                      <div className="container bg-light ">
                          <h1 className="mt-4 text-center p-5">
                              Hola,{item.firstName}!
                          </h1>
                          <div key={index} className="row ">
                              <div className="col-10 col-md-6 mx-auto">
                                  <div
                                      style={{ width: "100%" }}
                                      className="card p-3 "
                                  >
                                      <div className="text-center">
                                          <img
                                              style={{ width: "100px" }}
                                              src={item.image}
                                              className="rounded-circle"
                                              alt=""
                                          />
                                      </div>
                                      <div className="card-body">
                                          <h5 className="card-title text-center">
                                              Mi Perfil de Usuario
                                          </h5>
                                          <hr />
                                          <p className="card-text">
                                              <span>
                                                  Nombre de Usuario:
                                                  {item.username}{" "}
                                              </span>{" "}
                                              <hr />
                                          </p>
                                          <p className="card-text">
                                              <span>
                                                  Nombre:{item.firstName}
                                              </span>
                                              <p className="card-text">
                                                  <span>
                                                      Apellido :{item.lastName}
                                                  </span>
                                              </p>
                                          </p>
                                          <p className="card-text">
                                              <span>Email: {item.email}</span>
                                          </p>
                                          <hr />
                                          <p className="card-text">
                                              <small className="text-muted">
                                                  Logueado como :
                                                  {item.firstName}
                                              </small>
                                          </p>
                                      </div>
                                      <div className="text-center">
                                          <Link to="/">
                                              <button
                                                  className="boton-logout"
                                                  onClick={() => {
                                                      setIsAuth(false);
                                                      navigate("/");
                                                  }}
                                              >
                                                  Cerrar Sesion
                                              </button>
                                          </Link>
                                          <button
                                              onClick={() =>
                                                  navigate(
                                                      `/miperfil/${item.id}/editar`
                                                  )
                                              }
                                              className="boton-logout ms-3"
                                          >
                                              Editar
                                          </button>
                                      </div>
                                      <hr />
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
                : ""}
        </>
    );
};

export default PerfilAuth;
