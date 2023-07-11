import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Swal from "sweetalert2";


const DetalleCards = ({ item,addProduct,onClickHeart }) => {

  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
 
  const messageAddCart=()=>{

  }

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
              <li className="list-group-item">
              <svg
              
                style={{ cursor: "pointer",width:'25' }}
                onClick={() => onClickHeart(item)}
                viewBox="0 0 24 24"
              >
                <path
                  fill={item.favorito ? "orange" :"#FAED1C" }
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </li>
            </ul>
            <h3 className="m-3">
              $<span>{item.precio}</span>
            </h3>
            <div className="d-flex justify-content-between">
              <Link to="/galeria">
                <button className="boton-general ">
                  <i className="fa-solid fa-angles-left"></i>Regresar
                </button>
              </Link>
              <Link to="">
                <button 
                onClick={()=>addProduct(item)} 
                className="boton-general ">
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

export default DetalleCards;
