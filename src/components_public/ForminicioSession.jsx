import React, { useContext, useEffect, useState } from "react";
import "../CSS/formcss.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Error from "../components_privates/Error";
import { userContext } from "../Context/userContext";
import axios from "axios";



const ForminicioSession = () => {
  const { users, setUsers, setIsAuth } = useContext(userContext);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorInicio, setErrorInicio] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  
  //Pra iniciar sesion debemos buscar al array users de objetos si existe un item y contraseña igual al que le pasamos
  const customSesion = (usuario, e) => {
    const usuarios = () => {
      const result = users.find(
        (item) =>
          item.username === usuario.username &&
          item.password === usuario.password
      );
      if (result) {
        console.log(result);
        //setUsers([result]);
        setErrorInicio(false);
        setIsAuth(true);
        return goHome();
      } else {
        console.log("no existe usuario");
        setIsAuth(false);
        setErrorInicio(true);
        setUsers(users);
        console.log(usuario);
      }
    };
    usuarios();
    e.target.reset();
  
  };

  return (
    <>
      <h2 className="mt-5 p-4">Iniciar Sesion</h2>
      <form
        onSubmit={handleSubmit(customSesion)}
        className="form-control p-5 shadow rounded-4 "
      >
        <div className="mb-2">
          <label className="form-label">Ingresa tu usuario:</label>
          <input
            className="form-control"
            placeholder="Usuario.."
            type="text"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <small className="fail">* El campo usuario es obligatorio</small>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Contraseña:</label>
          <input
            className="form-control"
            placeholder="Contraseña"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <small className="fail">*El campo contraseña es obligatorio</small>
          )}
        </div>

        <button type="submit">Iniciar Sesion</button>
        {errorInicio && <Error>*Usuario y/o contraseña inválida</Error>}
      </form>
    </>
  );
};

export default ForminicioSession;
