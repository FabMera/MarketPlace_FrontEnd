import { useContext } from "react";
import { productContext } from "../Context/productContext";

const Producto = () => {
    const { publicacion, setPublicacion } = useContext(productContext);
    const { tipo, categoria, estado, precio, descrip } = publicacion;

    console.log(publicacion);
    return (
        <div className="bg-white border m-2 p-3">
            <p style={{ fontWeight: "bold" }}>Tipo de Producto:{tipo}</p>
            <p className="">Categoria:{categoria}</p>

            <p className="">Estado del Producto:{estado}</p>

            <p className="">Precio $:{precio}</p>
            <p className="">Descripcion de tu producto: {descrip}</p>

            <div className="d-flex justify-content-between">
                <button
                    onClick={() => setPublicacion(publicacion)}
                    className="btn btn-success"
                    type="button"
                >
                    Editar
                </button>
                <button className="btn btn-danger" type="button">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Producto;
