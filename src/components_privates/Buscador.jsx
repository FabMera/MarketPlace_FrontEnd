import React from "react";

const Buscador = ({ search, handleInput }) => {
  return (
    <div className="mb-3 p-3">
      <p className="p-search">Busca por el nombre del producto:</p>

      <form>
        <input
          value={search}
          onChange={handleInput}
          type="search"
          placeholder="Search.."
          className="form-control me-2"
        />
      </form>
    </div>
  );
};

export default Buscador;
