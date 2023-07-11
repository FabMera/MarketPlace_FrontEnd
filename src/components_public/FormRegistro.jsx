import React, { useContext, useEffect, useState } from "react";

import "../CSS/formcss.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Context/userContext";

const FormRegistro = () => {

 
    const { handlerAddUser, initialUserForm, error, setError,getUsers } =
        useContext(userContext);
    const [userForm, setUserForm] = useState(initialUserForm);

    useEffect(() => {
        getUsers();
    }, []);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({ ...userForm, [name]: value });
    };
    const { id, nombre, apellido, email, username, password } = userForm;

    const handleSubmit = (e) => {
        e.preventDefault();
        handlerAddUser(userForm);
        console.log(userForm);
        console.log(error);
    };
    

    return (
        <>
            <h2 className="mt-5 p-4">Registro de Usuario</h2>
            <form
                onSubmit={handleSubmit}
                className="form-control p-5 shadow rounded-4 "
            >
                <div className="mb-2">
                    <label className="form-label">Nombre:</label>
                    <input
                        className="form-control"
                        placeholder="indica tu nombre"
                        type="text"
                        value={nombre}
                        name="nombre"
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Apellido:</label>
                    <input
                        className="form-control"
                        placeholder="indica tu apellido"
                        type="text"
                        value={apellido}
                        name="apellido"
                        onChange={onInputChange}
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Elige un usuario:</label>
                    <input
                        className="form-control"
                        placeholder="Usuario"
                        type="text"
                        value={username}
                        name="username"
                        onChange={onInputChange}
                    />
                </div>
                <p className="text-danger">{error?.username}</p>
                <div className="mb-2">
                    <label className="form-label">Elige una contraseña:</label>
                    <input
                        className="form-control"
                        placeholder="Contraseña"
                        type="password"
                        value={password}
                        name="password"
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Correo Electronico:</label>
                    <input
                        className="form-control"
                        placeholder="ejemplo@mail.com"
                        type="email"
                        value={email}
                        name="email"
                        onChange={onInputChange}
                    />
                </div>
                <p className="text-danger">{error?.email}</p>
                <div className="mb-2">
                    <label className="form-label">
                        Imagen de Perfil (opcional)
                    </label>
                    <input
                        className="form-control"
                        placeholder="ingresa una url para tu imagen"
                        type="url"
                    />
                </div>
                <input type="hidden" name="id" value={id} />
                <button type="submit">Registrarme</button>
                <div className="registrarse">
                    <div className="d-flex flex-column align-items-center p-2">
                        <p>¿Ya tienes una cuenta?</p>
                        <Link style={{ textDecoration: "none" }} to="/inicio">
                            <p className="">Inicia Sesion..aqui</p>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormRegistro;
