import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const DetalleCardsPublica = ({item, addProductPublica}) => {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);


  return (
    <>
      <div key={item.id} className="row p-2">
        <div className="col-8 col-md-6 ">
          <img
            style={{ objectFit: "cover" }}
            src={item.cover ? item.cover : item.imagen}
            className="img-fluid rounded-3 ms-2 mt-1"
            alt="producto"
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">{item.tipo}</h5>
            <hr />
            <p className="card-text"></p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Estado del Producto: {item.estado}
              </li>
              <li className="list-group-item text-muted">
                Descripcion: {item.descrip}
              </li>
              <li className="list-group-item">
                <span>Cantidades disponibles: {item.cantidad}</span>
              </li>
              <li className="list-group-item">
                {Array(5)
                  .fill()
                  .map((_, index) =>
                    number >= index + 1 || hoverStar >= index + 1 ? (
                      <AiFillStar
                        style={{ color: "orange", cursor: "pointer" }}
                        onMouseOver={() => !number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        onClick={() => setNumber(index + 1)}
                      />
                    ) : (
                      <AiOutlineStar
                        onMouseOver={() => !number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        style={{ color: "orange", cursor: "pointer" }}
                        onClick={() => setNumber(index + 1)}
                      />
                    )
                  )}
              </li>
            </ul>
            <h3 className="m-3">
              $<span>{item.precio}</span>
            </h3>
            <div className="d-flex justify-content-between">
              <Link to="/galeria">
                <button style={{ color: "white" }} className="boton-general">
                  <i className="fa-solid fa-angles-left"></i>Regresar
                </button>
              </Link>
              <Link to="">
                <button
                  onClick={() => addProductPublica(item)}
                  className="boton-general "
                >
                  <i className="m-1 fa-solid fa-cart-shopping"></i>Añadir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleCardsPublica;
