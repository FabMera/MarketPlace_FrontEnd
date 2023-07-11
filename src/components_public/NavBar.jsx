import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";
import { FaShoppingCart } from "react-icons/fa";
import  { userContext } from "../Context/userContext";
import { productContext } from "../Context/productContext";


const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  const { carroCompra} = useContext(productContext);
  const navigate = useNavigate()

  const {isAuth,setUsers ,setIsAuth} = useContext(userContext)

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg  fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <p className="logo ms-5">MARKET PLACE</p>
          <ul className="navbar-nav mx-auto me-5 ">
            <li className="nav-item m-2">
              <Link to="/">
                <button className="boton ">
                  <i class="fa-solid fa-house-user p-1"></i>Home
                </button>
              </Link>
            </li>
            {isAuth || isAuthenticated ? (
              <>
                <li className="nav-item m-2 ">
                  <Link to="/mispublicaciones">
                    <button className="boton">
                      <i class="fa-solid fa-list-ul p-1"></i>Mis Publicaciones
                    </button>
                  </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/galeria">
                    <button className="boton">Galeria</button>
                  </Link>
                </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <button className="boton"><i className="fa-solid fa-user me-1"></i>Mi Perfil</button>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item">
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/favoritos"
                        >
                          Mis Favoritos
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <Link style={{ textDecoration: "none" }} to="/miperfil">
                          Ver Perfil
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <Link style={{ textDecoration: "none" }} to="/carrito">
                          Carrito
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        {isAuth ? (
                          <button
                            onClick={() => {setIsAuth(false);navigate('/')}}
                            className="boton-logout"
                          >
                           Cerrar Sesion
                          </button>
                        ) : (
                          <LogoutButton />
                        )}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item m-2">
                  <a className="nav-link">
                    <Link to="/carrito">
                      <FaShoppingCart style={{ color: "white" }} />
                    </Link>

                    <span className="badge bg-danger rounded-pill">
                      {carroCompra.length}
                    </span>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item m-2">
                  <a className="dropdown-item">
                    <Link to="/inicio">
                      <LoginButton />
                    </Link>
                  </a>
                </li>
                <li className="nav-item m-2">
                  <a className="dropdown-item">
                    <Link to="/registro">
                      <RegisterButton />
                    </Link>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
