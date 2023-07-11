import axios from "axios";

const API_URL = "http://localhost:8080/users";

/*findAll solo para ROL admin de la plataforma  */

export const findAll = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//METODO PARA GUARDAR UN USUARIO
export const save = async ({ username, password, email, nombre, apellido}) => {
    try {
        return await axios.post(API_URL, {
            username,
            password,
            email,
            nombre,
            apellido,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//METODO PARA ACTUALIZAR UN USUARIO
export const update = async ({ id, username, email }) => {
    try {
        return await axios.put(`${API_URL}/${id}`, { username, email });
    } catch (error) {
        throw error;
    }
};

//METODO PARA ELIMINAR UN USUARIO
export const remove = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw error;
    }
};
