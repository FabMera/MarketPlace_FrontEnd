import { useContext } from "react";
import Error from "./Error";
import { productContext } from "../Context/productContext";


const PublicarForm = ({
  error,
  handleSubmit,
  modoedicion,
  handleOnChangeFile,
}) => {
  //------------------------CONTEXTOS-------------------------------------------//
  const {
    tipo,
    precio,
    imagen,
    descrip,
    cantidad,
    setTipo,
    categoria,
    estado,
    setCategoria,
    setEstado,
    setPrecio,
    setDescrip,
    setImagen,
    setCantidad,
    categories,
  } = useContext(productContext);

  return (
    <>
      <h4 className="text-center  mt-5 p-4 ">Publicar Nuevo Aviso</h4>

      <form
        onSubmit={handleSubmit}
        className="form-control mb-4 mt-3 shadow p-3  bg-body rounded"
      >
        {error && <Error>*Todos los campos son necesarios</Error>}

        <div className="mb-2">
          <label className="form-label">Nombre de tu Producto:</label>

          <input
            className="form-control"
            type="text"
            placeholder="Tipo de Producto (ej;smartphone,tv,ps5)"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Categoria de Producto:</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="form-select text-center"
            aria-label="Default select example"
          >
            <option value="">---Elige una Categoria---</option>
            {categories.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="form-label">Estado de tu Producto:</label>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="form-select text-center"
            aria-label="Default select example"
          >
            <option value="">---Selecciona una opcion---</option>
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
          </select>
        </div>

        <div className="mb-2">
          <label //for o htmlfor en react es para asociar un elemento con algo
            htmlFor="precio"
            className="form-label"
          >
            Precio $
          </label>

          <input
            type="number"
            className="form-control"
            min="1"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label //for o htmlfor en react es para asociar un elemento con algo
            htmlFor=""
            className="form-label"
          >
            Cantidad :
          </label>

          <input
            type="number"
            className="form-control"
            placeholder=""
            value={cantidad}
            min="1"
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label //for o htmlfor en react es para asociar un elemento con algo
            htmlFor=""
            className="form-label"
          >
            Sube una imagen local o desde una URL:
          </label>

          <input
            type="url"
            className="form-control"
            placeholder="Ingresa la URL: debe ser formato imagen PNG,IMG,"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
          <input
            type="file"
            className="form-control mt-3"
            onChange={handleOnChangeFile}
          />
        </div>
        <div className="mb-5">
          <label //for o htmlfor en react es para asociar un elemento con algo
            htmlFor=""
            className="form-label"
          >
            Describe tu Producto
          </label>

          <textarea
            id="sintomas"
            className="form-control"
            placeholder="Ej caracteristicas,estado,tiempo de uso."
            value={descrip}
            onChange={(e) => setDescrip(e.target.value)}
          />
        </div>

        <input
          type="submit"
          style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
          className="btn btn-info w-100"
          value={modoedicion ? "Editar Producto" : "Publicar Producto"}
        />
      </form>
    </>
  );
};

export default PublicarForm;
