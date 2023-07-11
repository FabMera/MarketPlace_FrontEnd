import React, { useContext, useEffect, useState } from "react";
import ListadoProductos from "../components_privates/ListadoProductos";
import PublicarForm from "../components_privates/PublicarForm";
import Swal from "sweetalert2";
import axios from "axios";
import ModalForm from "../components_privates/ModalForm";
import { productContext } from "../Context/productContext";


const MisPublicaciones = () => {
  const {
    tipo,
    categoria,
    estado,
    precio,
    imagen,
    descrip,
    cantidad,
    publicacion,
    setPublicacion,
    setTipo,
    setCategoria,
    setEstado,
    setPrecio,
    setDescrip,
    setImagen,
    setCantidad,
    setCategories,
    modoedicion,
    setModoEdicion,
    users,
  } = useContext(productContext);

  //Estados para el id del formulario actualizado,el error y el modo edicion
  const [ide, setIde] = useState("");
  const [error, setError] = useState(false);
  const [cover, setCover] = useState("");
  //funcion eliminar producto de mis publicaciones
  const deleteItem = (id) => {
    const product = publicacion.filter((ele) => ele.id !== id);
    setPublicacion(product);
    Swal.fire({
      title: `Eliminastes un producto de tu Lista`,
      text: "Eliminado",
      icon: "warning",
    });
  };
  //funcion para editar reutilizando el FORMULARIO
  const edit = (id) => {
    const temp = [...publicacion];
    const elemento = temp.find((ele) => ele.id === id);
    setTipo(elemento.tipo);
    setCategoria(elemento.categoria);
    setEstado(elemento.estado);
    setPrecio(elemento.precio);
    setImagen(elemento.imagen);
    setDescrip(elemento.descrip);
    setCantidad(elemento.cantidad);
    setIde(elemento.id);
    setPublicacion(temp);
    setModoEdicion(true);
    setCover("");
    <ModalForm />;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos formulario
    if ([tipo, categoria, estado, precio, descrip, cantidad].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const usuario = users.find((ele) => ele.username);
    const objProducto = {
      tipo,
      categoria,
      estado,
      precio,
      imagen,
      descrip,
      favorito: false,
      cantidad, //lo que publica el usuario,stock.
      cantidades: 1, //valor inicial que una persona puede comprar e incrementa y decrementa.
      cover,
      username: usuario.username,
    };
    //funcion para editar un FORMULARIO de PRODUCTOS.
    if (modoedicion) {
      const temp = [...publicacion];
      const elemento = temp.find((ele) => ele.id === ide);
      //existe un id?
      if (elemento.id) {
        objProducto.id = elemento.id;
        const publicacionActual = publicacion.map((object) =>
          object.id === elemento.id ? objProducto : object
        );
        setPublicacion(publicacionActual);
      }
    } else {
      objProducto.id = generarId();
      setPublicacion([...publicacion, objProducto]);
    }
    /* setProductos([...productos, objProducto]); solo si quiero agregar el producto al array de la API*/

    //Producto de la API + producto formulario;

    setTipo("");
    setCategoria("");
    setEstado("");
    setPrecio("");
    setImagen("");
    setDescrip("");
    setCantidad("");
    setModoEdicion(false);
  };
  console.log(publicacion);
  //Generamos un id aleatorio para el nuevo producto que agregamos
  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
  };

  //funcion para el SELECT de Categorias
  const url = "https://dummyjson.com/products/categories";
  const cargarCategories = async () => {
    const res = await axios.get(url);
    const info = res.data;
    setCategories(info);
  };

  useEffect(() => {
    cargarCategories();
  }, []);
  //funcion para cargar y leer imagen de un archivo local
  function handleOnChangeFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  }



  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-4 mx-auto">
          <PublicarForm
            error={error}
            handleSubmit={handleSubmit}
            modoedicion={modoedicion}
            handleOnChangeFile={handleOnChangeFile}
            cover={cover}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <h4 className=" text-center mt-5 pt-4 m-2">
            Listado de Tus Productos
          </h4>
          <p className="text-center">
            Administras tus {""}
            <span style={{ fontWeight: "bold" }} className="text-danger">
              Productos
            </span>
          </p>
          <ListadoProductos deleteItem={deleteItem} edit={edit} />
        </div>
      </div>
    </div>
  );
};

export default MisPublicaciones;
