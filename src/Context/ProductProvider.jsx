import { useProduct } from "./useProduct.js";
import {productContext} from "./productContext";

const ProductProvider = ({ children }) => {
    const {
        productos,
        setProductos,
        publicacion,
        setPublicacion,
        categories,
        setCategories,
        total,
        setTotal,
        carroCompra,
        setCarroCompra,
        tipo,
        setTipo,
        categoria,
        setCategoria,
        estado,
        setEstado,
        precio,
        setPrecio,
        imagen,
        setImagen,
        descrip,
        setDescrip,
        cantidad,
        setCantidad,
        modoedicion,
        setModoEdicion,
    } = useProduct();

    return (
        <productContext.Provider
            value={{
                productos,
                setProductos,
                publicacion,
                setPublicacion,
                categories,
                setCategories,
                total,
                setTotal,
                carroCompra,
                setCarroCompra,
                tipo,
                setTipo,
                categoria,
                setCategoria,
                estado,
                setEstado,
                precio,
                setPrecio,
                imagen,
                setImagen,
                descrip,
                setDescrip,
                cantidad,
                setCantidad,
                modoedicion,
                setModoEdicion,
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;
