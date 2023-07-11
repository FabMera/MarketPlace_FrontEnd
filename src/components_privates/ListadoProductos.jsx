import { useContext, useEffect, useState } from "react";
import ModalForm from "./ModalForm";
import { userContext } from "../Context/userContext";
import { productContext } from "../Context/productContext";

const ListadoProductos = ({ deleteItem, edit }) => {
    const { publicacion } = useContext(productContext);
    const { users } = useContext(userContext);

    //verificamos contenido del objeto para comprobar el formulario
    useEffect(() => {
        if (Object.keys(publicacion).length > 0) {
            console.log("Producto Agregado");
        } else {
            console.log("Formulario Vacio");
        }
    }, [publicacion]);

    const handleClickClose = () => {
        setModal(!modal);
    };
    const [modal, setModal] = useState(false);

    //variables para filtrar que solo se muestren los listados de productos del usuario que se encuentra en la sesion activa.
    const usuarioProducto = users.find((user) => user.username); //capturamos el usuario actual
    const usuarioactual = usuarioProducto.username; //accedo al usuario actual para solo mostrar sus productos..
    const filtrarPublicaciones = publicacion.filter(
        (user) => user.username === usuarioactual
    );

    return (
        <>
            {filtrarPublicaciones.map((item) => (
                <div
                    key={item.id}
                    className="m-2 p-3 mt-4 shadow-lg  bg-body rounded"
                >
                    <p>Tipo de Producto:{item.tipo}</p>
                    <hr />
                    <p className="">Categoria:{item.categoria}</p>
                    <hr />
                    <p className="">Estado del Producto:{item.estado}</p>
                    <hr />
                    <p className="">Precio US$:{item.precio}</p>
                    <hr />
                    <p className="">Unidades ofrecidas :{item.cantidad}</p>
                    <hr />
                    <p className="">
                        Descripcion de tu producto: {item.descrip}
                    </p>

                    <div className="d-flex justify-content-between">
                        <button
                            onClick={() => {
                                edit(item.id);
                                handleClickClose();
                            }}
                            className="btn btn-success m-2 shadow"
                            type="button"
                        >
                            <i class="fa-regular fa-pen-to-square m-2"></i>
                            EDITAR
                        </button>
                        <ModalForm
                            handleClickClose={handleClickClose}
                            modal={modal}
                            setModal={setModal}
                        />
                        <button
                            onClick={() => deleteItem(item.id)}
                            className="btn btn-danger m-2 shadow"
                            type="button"
                        >
                            <i className="fa-regular fa-trash-can m-2"></i>
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListadoProductos;
