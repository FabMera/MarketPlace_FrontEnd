import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comentarios from "../components_privates/Comentarios";
import DetalleCards from "../components_privates/DetalleCards";
import DetalleCardsPublica from "../components_privates/DetalleCardsPublica";
import TodoComentarios from "../components_privates/TodoComentarios";
import Swal from "sweetalert2";
import { productContext } from "../Context/productContext";


const DetalleProducto = () => {
  const { publicacion, productos, carroCompra, setCarroCompra, setProductos } =useContext(productContext);

  const { id } = useParams();
  const { user } = useAuth0();
  //hook para los comentarios
  const [comentario, setComentario] = useState("");
  //hook para enlistar los comentarios []
  const [list, setList] = useState([]);
  const [modoedit, setModoEdit] = useState(false);
  const [iDeditar, setIdeditar] = useState("");

  useEffect(() => {
    const obtenerDataLocal = () => {
      const listaLS = JSON.parse(localStorage.getItem("list")) ?? [];
      setList(listaLS);
    };
    obtenerDataLocal();
  }, []);

  //guardo los estados en localStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleCommitChange = (e) => {
    setComentario(e.target.value);
    console.log(e.target.value);
  };

  const handleCommitSubmit = (e) => {
    e.preventDefault();
    const commits = {
      id: Date.now(),
      commit: comentario,
    };
    const temp = [...list, commits];
    setList(temp);

    if (modoedit) {
      const temp = [...list];
      const elemento = temp.find((ele) => ele.id === iDeditar);
      if (elemento.id) {
        commits.id = elemento.id;
        const publicacionActual = list.map((object) =>
          object.id === elemento.id ? commits : object
        );
        setList(publicacionActual);
      }
    } else {
      commits.id = Date.now();
      setList([...list, commits]);
    }
    setComentario("");
    setModoEdit(false);
  };

  //funcion para borrar un comentario
  const deleteComment = (id) => {
    const deleteElement = list.filter((item) => item.id !== id);
    setList(deleteElement);
  };

  const editComment = (id) => {
    const temp = [...list];
    const elemento = temp.find((ele) => ele.id === id);
    console.log(elemento);
    setComentario(elemento.commit);
    setIdeditar(elemento.id);
    setModoEdit(true);
  };

  //Funcion que agrega productos al carrito desde la API
  const addProduct = (item) => {
    const carrito = [...productos];
    const resultado = carrito.find((ele) => ele.id === item.id);
    setCarroCompra([...carroCompra, resultado]);
    return Swal.fire({
      title: "1 Producto añadido",
      text: "Producto agregado al Carrito",
      icon: "success",
    });
  };
  //Funcion que agrega productos desde las publicaciones del usuario
  const addProductPublica = (item) => {
    const carrito = [...publicacion];
    const resultado = carrito.find((ele) => ele.id === item.id);
    setCarroCompra([...carroCompra, resultado]);
    return Swal.fire({
      title: "1 Producto añadido",
      text: "Producto agregado al Carrito",
      icon: "success",
    });
  };

  const onClickHeart = (item) => {
    const favoritas = [...productos];
    const index = favoritas.findIndex((ele) => ele.id === item.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setProductos(favoritas);
    if (favoritas[index].favorito) {
      return Swal.fire({
        title: "!Perfecto!",
        text: "Agregado a tus Favoritos",
        icon: "success",
      });
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 p-5">Detalle del Producto</h1>
        <div className="row">
          <div className="col-10 col-md-6 col-sm-10 card  d-flex align-items-center mt-4 shadow bg-white rounded-5">
            {productos
              .filter((item) => item.id === Number(id))

              .map((item) => (
                <DetalleCards
                  key={item.id}
                  addProduct={addProduct}
                  item={item}
                  user={user}
                  onClickHeart={onClickHeart}
                />
              ))}
            {publicacion
              .filter((item) => item.id === id)

              .map((item) => (
                <DetalleCardsPublica
                  addProductPublica={addProductPublica}
                  key={item.id}
                  item={item}
                  user={user}
                />
              ))}
          </div>
        </div>
        <Comentarios
          handleCommitSubmit={handleCommitSubmit}
          comentario={comentario}
          setComentario={setComentario}
          handleCommitChange={handleCommitChange}
          modoedit={modoedit}
        />
        <p>Ultimos comentarios de usuarios:</p>
        <hr />

        <div className="row">
          <div className="col-8 col-md-6 mx-auto ">
            {list.map((item) => (
              <TodoComentarios
                list={list}
                key={item.id}
                item={item}
                user={user}
                deleteComment={deleteComment}
                editComment={editComment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleProducto;
