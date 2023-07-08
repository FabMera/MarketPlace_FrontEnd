
import Micontext from "./Context/Micontext";
import { useEffect, useState } from "react";
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
import { cargarProductos } from "./data/productos";
import EditarUsuario from "./pages_private/EditarUsuario";
import { cargarUsuarios } from "./data/users";

function App() {
  const { isAuthenticated } = useAuth0();
  const [isAuth, setIsAuth] = useState(false);
  const [productos, setProductos] = useState([]);
  const [publicacion, setPublicacion] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [carroCompra, setCarroCompra] = useState([]);
  const [users, setUsers] = useState([]);
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [estado, setEstado] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [descrip, setDescrip] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [modoedicion, setModoEdicion] = useState(false);
  const { isLoading } = useAuth0();



  //Mostrar productos desde la api de Dummy ..
  useEffect(() => {
    cargarProductos(setProductos);
  }, []);
  //Cargo los usuarios del users.json
  useEffect(() => {
    cargarUsuarios(setUsers);
    console.log(users)
  }, []);

  // solicito los datos a la local storage y los transformo
  useEffect(() => {
    const obtenerDataLocal = () => {
      const publicacionLS =
        JSON.parse(localStorage.getItem("publicacion")) ?? [];
      setPublicacion(publicacionLS);
    };
    obtenerDataLocal();
  }, []);

  //guardo los estados en localStorage
  useEffect(() => {
    localStorage.setItem("publicacion", JSON.stringify(publicacion));
  }, [publicacion]);

  //Muestro el Spinner mientras exista una carga del usuario.
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <Micontext.Provider
        value={{
          isAuth,
          setIsAuth,
          users,
          setUsers,
          productos,
          setProductos,
          publicacion,
          setPublicacion,
          categories,
          setCategories,
          total,
          setTotal,
          carroCompra,
          setCarroCompra,
          tipo,
          setTipo,
          categoria,
          setCategoria,
          estado,
          setEstado,
          precio,
          setPrecio,
          imagen,
          setImagen,
          descrip,
          setDescrip,
          cantidad,
          setCantidad,
          modoedicion,
          setModoEdicion,
        }}
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            {isAuth || isAuthenticated ? (
              <>
                {" "}
                <Route
                  path="/mispublicaciones"
                  element={<MisPublicaciones />}
                />
                <Route path="/" element={<Home />} />
                <Route path="/galeria" element={<GaleriaGeneral />} />
                <Route path="/miperfil" element={<Miperfil />} />
                <Route path="/miperfil/:usuarioId/editar" element={<EditarUsuario />} />
                <Route path="/favoritos" element={<MisFavoritos />} />
                <Route path="/producto/:id" element={<DetalleProducto />} />
                <Route path="/carrito" element={<Carrito />} />
              </>
            ) : (
              <>
                {" "}
                <Route path="/" element={<Home />} />
                {/* <Route path="*" element={<Navigate to="/404" />} /> */}
                <Route path="/inicio" element={<InicioSesion />} />
                <Route path="/registro" element={<Registro />} />{" "}
              </>
            )}
            {<Route path="*" element={<Page404 />} />}
          </Routes>
        </BrowserRouter>
      </Micontext.Provider>
    </div>
  );
}

export default App;
