import { useState } from "react";
import { findAll, remove, save, update } from "../services/userService";

const initialErrorForm = {
    nombre: "",
    apellido: "",
    email: "",
    username: "",
    password: "",
};

const initialUserForm = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    username: "",
    password: "",
};

export const useUsers = () => {
    const [users, setUsers] = useState();
    const [isAuth, setIsAuth] = useState(false);
    const [error, setError] = useState(initialErrorForm);

    const getUsers = async () => {
        try {
            const result = await findAll();
            setUsers(result.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setIsAuth(false);
                setError(error.response.data);
            }
        }
    };

    const handlerAddUser = async (user) => {
        let response;
        try {
            if (user.id === 0) {
                response = await save(user);
                setUsers((prevState) => [...prevState, response.data]);
                setIsAuth(true);
            } else {
                response = await update(user);
                const index = users.findIndex((e) => e.id === user.id);
                users[index] = user;
                setUsers(users);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setIsAuth(false);
                setError(error.response.data);
            } else if (
                error.response &&
                error.response.status === 500 &&
                error.response.data?.message?.includes("constraint")
            ) {
                if (error.response.data?.message?.includes("UK_username")) {
                    setError({ username: "Username already registered!" });
                }
                if (error.response.data?.message?.includes("UK_email")) {
                    setError({ email: "Email already registered" });
                }
            } else if (error.response?.status === 401) {
                setIsAuth(false);
                setError(error.response.data);
            } else {
                throw error;
            }
        }
    };
    return {
        users,
        setUsers,
        getUsers,
        handlerAddUser,
        isAuth,
        setIsAuth,
        error,
        setError,
        initialUserForm,
    };
};
