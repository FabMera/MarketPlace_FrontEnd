import React from 'react'

const SelectOrderby = ({handleSelectPrecio,selectprecio}) => {

  return (
    <div className="mb-3  p-3">
    <p className="p-search">Puedes ordenar por Precio</p>
      <select
        value={selectprecio}
        className="form-select"
        onChange={handleSelectPrecio}
        aria-label="Default select example"
      >
        <option value="">--Listar por Precio--</option>
        <option value="mayoramenor">Ordenar Precio $ de Mayor a Menor: </option>
        <option value="menoramayor">Ordenar Precio $ de Menor a Mayor:</option>
      </select>
    </div>
  )
}

export default SelectOrderby