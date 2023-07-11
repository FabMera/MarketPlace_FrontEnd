import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { userContext } from "../Context/userContext";
import { productContext } from "../Context/productContext";


const MisFavoritos = () => {
  const {
    publicacion,
    setPublicacion,
    carroCompra,
    setCarroCompra,
    productos,
    setProductos
  } = useContext(productContext);
  const { user } = useAuth0();

  const {isAuth,users} = useContext(userContext);

  /* Funcion para borrar de publicaciones */
  const clickDelete = (ele) => {
    const favoritas = [...publicacion];
    const index = favoritas.findIndex((item) => item.id === ele.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setPublicacion(favoritas);
  };
  /* funcion para agregar al carrito desde favoritos */
  const addProductPublic = (ele) => {
    const carrito = [...publicacion];
    const resultado = carrito.find((item) => item.id === ele.id);
    setCarroCompra([...carroCompra, resultado]);
    console.log(resultado);
    console.log(carroCompra);
  };
  /* elimina de favoritos los productos */
  const clickDeleteProd = (ele) => {
    const favoritas = [...productos];
    const index = favoritas.findIndex((item) => item.id === ele.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setProductos(favoritas);
  };
  /* Agrega productos al carrito de los productos */
  const addProduct = (ele) => {
    const carrito = [...productos];
    const resultado = carrito.find((item) => item.id === ele.id);
    setCarroCompra([...carroCompra, resultado]);

  };

  return (
    <>
      <div className="container bg-light">
        <h1 className="text-center mt-4 pt-5">Mis Favoritos</h1>
        <p className="text-center"><em >Aqui puedes agregar tus favoritos..haz click en el 💛 de un producto que te guste..</em></p>
        <div className="row">
          {publicacion
            .filter((ele) => ele.favorito)
            .map((ele) => (
              <div
                key={ele.id}
                className="col-8 col-md-6 col-sm-6 col-lg-4 col-xl-3 mx-auto  "
              >
                <div style={{border:'none'}} className="card shadow-sm mx-auto rounded-4   ">
                  <img
                    style={{ width: "100%", height: "180px" }}
                    src={ele.cover ? ele.cover : ele.imagen}
                    className="img-fluid"
                    alt="foto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{ele.tipo}</h5>
                    
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: $ {ele.precio}</li>
                    <li className="list-group-item">
                    <p className="card-text">
                      Estado del Producto: {ele.estado}
                    </p>
                    </li>
                  </ul>
                  <div className="card-body d-flex flex-column mx-auto p-0 w-75 ">
                    <button
                      onClick={() => clickDelete(ele)}
                      className="btn btn-warning btn-sm mt-3"
                    >
                      Eliminar de Favoritos
                    </button>
                    <button
                      onClick={() => addProductPublic(ele)}
                      className="btn btn-info btn-sm mb-3 mt-3"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* publicaciones del usuario y productos se muestran aqui en favoritos */}
            {productos
            .filter((ele) => ele.favorito)
            .map((ele) => (
              <div
                key={ele.id}
                className="col-8 col-md-6 col-sm-6 col-lg-4 col-xl-3 mx-auto  "
              >
                <div style={{border:'none'}} className="card shadow-sm mx-auto rounded-4"   >
                  <img
                    style={{ width: "100%", height: "180px" }}
                    src={ele.cover ? ele.cover : ele.imagen}
                    className="img-fluid"
                    alt="foto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{ele.tipo}</h5>

                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: $ {ele.precio}</li>
                    <li className="list-group-item">
                    <p className="card-text">
                     Estado del Producto:{ele.estado}
                    </p>
                    </li>
                  </ul>
                  <div className="card-body d-flex flex-column mx-auto p-0 w-75 ">
                    <button
                      onClick={() => clickDeleteProd(ele)}
                      className="btn btn-warning btn-sm mt-3"
                    >
                      Eliminar de Favoritos
                    </button>
                    <button
                      onClick={() => addProduct(ele)}
                      className="btn btn-info btn-sm  mt-3 mb-3"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MisFavoritos;
