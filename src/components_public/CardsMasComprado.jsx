const CardsMasComprado = ({ product, irAlDetalle }) => {
  return (
    <>
      <div className="cards ">
        <div className="targeta card rounded-5 border border-success border-opacity-10">
          <img
            style={{ height: "180px" }}
            src={product.imagen}
            className="card-img-top w-100"
            alt="foto"
          />
          <div className="card-body ">
            <h6 className="card-title text-center ">{product.tipo}</h6>
            <p className="card-text"></p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">
              Precio: US$ {product.precio}
            </li>
            <li className="list-group-item text-center">
              Categoria : {product.categoria}
            </li>
          </ul>
          <div className="d-flex justify-content-center mt-2 p-2">
            <button
              onClick={() => irAlDetalle(product.id)}
              className="btn btn-warning "
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsMasComprado;
