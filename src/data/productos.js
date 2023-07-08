import axios from "axios";

const endpoint = "https://dummyjson.com/products?limit=30";

export const cargarProductos = async (setProductos) => {
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
