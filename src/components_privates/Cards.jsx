import { useContext } from "react";
import { userContext } from "../Context/userContext";


const Cards = ({ product, onClickHeart, irAlDetalle, addProduct, user}) => {

const {isAuth}=useContext(userContext)

  return (
    <>
      <div className="col col-md-6 col-sm-6 col-lg-4 col-xl-3 ">
        <div style={{border:'none'}} className="card rounded-5 mx-auto text-center shadow ">
          <img
            style={{ width: "100%", height: "200px" }}
            src={product.cover? product.cover:product.imagen}    
            className="img-fluid"
            alt="foto"
          />

          <div className="card-body">
            <h6 className="card-title">{product.tipo}</h6>
          
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Precio: US$ {product.precio}</li>
            <li className="list-group-item">Categoria : {product.categoria}</li>
            <li className="list-group-item">
              <svg
                style={{ cursor: "pointer",width:'25',borderColor:'black' }}
                onClick={() => onClickHeart(product)}
                viewBox="0 0 24 24"
              >
                <path
                  fill={product.favorito ? "orange" :"#FAED1C" }
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </li>
          </ul>
          <div className="card-body d-flex justify-content-between">
            <button
              onClick={() => irAlDetalle(product.id)}
              className="btn btn-warning btn-sm"
            >
              Ver Detalle
            </button>
            <button
              onClick={() => addProduct(product)}
              className="btn btn-info btn-sm"
            >
              Comprar
            </button>
          </div>
          <div className="card-footer mt-2 ">
            <small className="text-muted">Publicado por {isAuth?product.username:user.name}.</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
