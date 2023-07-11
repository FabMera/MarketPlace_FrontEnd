import React from "react";

const TablaCarro = ({
  deleteItem,
  producto,
  incrementCount,
  decrementCount,
}) => {
  return (
    <tbody>
      <tr>
        <th scope="row">
          {producto.tipo}{" "}
          <img
            style={{ cursor: "pointer" }}
            className="d-flex mx-auto mt-2"
            src={producto.cover ? producto.cover : producto.imagen}
            alt="picfoto"
            width="35"
            height="30"
          ></img>{" "}
        </th>
        <td>US${producto.precio} </td>
        <td>
          <div className="mt-1 mb-1">
            <button
              title="agregar"
              style={{ width: "25px", height: "25px", color: "white" }}
              className="btn btn-info p-0"
              onClick={() => incrementCount(producto)}
              disabled={producto.cantidades === producto.cantidad}
            >
              +
            </button>
            <span className="m-2">{producto.cantidades}</span>

            <button
              title="quitar"
              style={{ width: "25px", height: "25px", color: "white" }}
              disabled={producto.cantidades <= 0}
              className="btn btn-info p-0"
              onClick={() => decrementCount(producto)}
            >
              {" "}
              -
            </button>
            {producto.cantidades === producto.cantidad ? (
              <p className="m-1" style={{ color: "red", fontWeight: "bold" }}>
                *Solo puedes llevar {producto.cantidad}
              </p>
            ) : (
              ""
            )}
          </div>
        </td>
        <td>US$ :{producto.precio * producto.cantidades}</td>
        <td>
          {" "}
          <button
            title="Eliminar del Carrito"
            onClick={() => deleteItem(producto.id)}
            className="btn btn-danger"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TablaCarro;
