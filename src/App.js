import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components_public/NavBar";
import GaleriaGeneral from "./pages_private/GaleriaGeneral";
import Miperfil from "./pages_private/Miperfil";
import MisPublicaciones from "./pages_private/MisPublicaciones";
import Home from "./pages_public/Home";
import InicioSesion from "./pages_public/InicioSesion";
import Registro from "./pages_public/Registro";
import MisFavoritos from "./pages_private/MisFavoritos";
import DetalleProducto from "./pages_private/DetalleProducto";
import Carrito from "./pages_private/Carrito";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./components_privates/Spinner";
import Page404 from "./pages_public/Page404";
import EditarUsuario from "./pages_private/EditarUsuario";
import UserProvider from "./Context/UserProvider";
import ProductProvider from "./Context/ProductProvider";
import { userContext } from "./Context/userContext.js";
import { productContext } from "./Context/productContext.js";
import axios from "axios";

function App() {
    const { isAuthenticated } = useAuth0();
    const { isLoading } = useAuth0();

    const { isAuth, setUsers, users } = useContext(userContext);
    const { productos } = useContext(productContext);
   


    //Muestro el Spinner mientras exista una carga del usuario.
  
    const endpointuser = "http://localhost:8080/users/allusers";

    const cargarUsuarios = async () => {
        const res = await axios.get(endpointuser);
        const info = res.data;
        setUsers(info);
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);
    
  if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {" "}
                    <Route
                        path="/mispublicaciones"
                        element={<MisPublicaciones />}
                    />
                    <Route path="/" element={<Home />} />
                    <Route path="/galeria" element={<GaleriaGeneral />} />
                    <Route path="/miperfil" element={<Miperfil />} />
                    <Route
                        path="/miperfil/:usuarioId/editar"
                        element={<EditarUsuario />}
                    />
                    <Route path="/favoritos" element={<MisFavoritos />} />
                    <Route path="/producto/:id" element={<DetalleProducto />} />
                    <Route path="/carrito" element={<Carrito />} />{" "}
                    <Route path="/" element={<Home />} />
                    {/* <Route path="*" element={<Navigate to="/404" />} /> */}
                    <Route path="/inicio" element={<InicioSesion />} />
                    <Route path="/registro" element={<Registro />} />{" "}
                    {<Route path="*" element={<Page404 />} />}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
