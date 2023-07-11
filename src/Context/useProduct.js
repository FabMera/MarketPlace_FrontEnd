import axios from "axios";
import { useEffect, useState } from "react";

export const useProduct = () => {
    const [productos, setProductos] = useState([]);
    const [publicacion, setPublicacion] = useState([]);
    const [categories, setCategories] = useState([]);
    const [total, setTotal] = useState(0);
    const [carroCompra, setCarroCompra] = useState([]);

    const [tipo, setTipo] = useState("");
    const [categoria, setCategoria] = useState([]);
    const [estado, setEstado] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [descrip, setDescrip] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [modoedicion, setModoEdicion] = useState(false);


    const endpoint = "https://dummyjson.com/products?limit=30";
    const cargarProductos = async () => {
        try {
          const res = await axios.get(endpoint);
          const info = res.data.products;
      
          const dataProductos = info.map((ele) => ({
            id: ele.id,
            descrip: ele.description,
            categoria: ele.category,
            imagen: ele.thumbnail,
            tipo: ele.title,
            precio: ele.price,
            favorito: false,
            estado: "nuevo",
            cantidad: ele.stock,
            cantidades:1
          }));
          setProductos(dataProductos);
        } catch (error) {
          console.log("error conexion" + error);
        }
      };


    //Mostrar productos desde la api de Dummy ..
    useEffect(() => {
        cargarProductos();
        
    }, []);

    return {
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
    };
};
