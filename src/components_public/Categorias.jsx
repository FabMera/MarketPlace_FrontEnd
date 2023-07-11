import React from "react";
import "../CSS/estilos_categorias.css";
const Categorias = () => {
  
  return (
    <div className="contenedor">
    
      <div className="col">
        <div className="cardItem">
          <i className="fa-solid fa-laptop-code fa-3x"></i>
          <span className="cardLabel">Laptop</span>
        </div>
      </div>
      <div className="col ">
        <div className="cardItem">
          <i className="fa-solid fa-mobile fa-3x"></i>
          <span className="cardLabel">Smartphones</span>
        </div>
      </div>
      <div className="col ">
        <div className="cardItem">
          <i className="fa-solid fa-book-open fa-3x"></i>
          <span className="cardLabel">Books</span>
        </div>
      </div>
      <div className="col">
        <div className="cardItem">
          <i className="fa-solid fa-bicycle fa-3x"></i>
          <span className="cardLabel">Bikes</span>
        </div>
      </div>
      <div className="col ">
        <div className="cardItem">
          <i className="fa-solid fa-tv fa-3x"></i>
          <span className="cardLabel">Technology</span>
        </div>
      </div>
      <div className="col">
        <div className="cardItem">
          <i className="fa-solid fa-shirt fa-3x"></i>
          <span className="cardLabel">Clothing</span>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
