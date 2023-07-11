import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Error from "../components_privates/Error";
import { userContext } from "../Context/userContext";


const EditarUsuario = () => {
  const [errorEditForm, setErrorEditForm] = useState(false);
  const [usersEdit, setUsersEdit] = useState([]);
  const { users } = useContext(userContext);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const endpoint = `http://localhost:8000/users/`;

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(endpoint);
      const info = res.data;
      setUsersEdit(info);
    };
    getUser();
  }, [endpoint]);

  useEffect(() => {
    const usuarioActual = users.find((item) => item.username);
    console.log(usuarioActual);
    const firstName = usuarioActual.nombre;
    const lastName = usuarioActual.apellido;
    const username = usuarioActual.username;
    setValue("nombre", firstName);
    setValue("apellido", lastName);
    setValue("username", username);
  });

  const editSubmit = (data, e) => {
    const result = () => {
      const resultado = usersEdit.some((item) => item.email === data.email); //busco si existe el mismo correo dentro de los usuarios en uso.

      if (resultado) {
        console.log("Mail ya se encuentra registrado");
        setErrorEditForm(true);
        return;
      }
      const usuarioActual = users.find((ele) => ele.username);
      const id = usuarioActual.id;
      const editarUsuario = async () => {
        const response = await axios.put(
          `http://localhost:8000/users/${id}`,
          data
        );
        setErrorEditForm(false);
        return Swal.fire({
          title: "Editastes tu Perfil",
          text: "Ahora vuelve a iniciar sesion para ver los cambios",
          icon: "success",
        });
      };
      editarUsuario();
      e.target.reset();
    };
    result();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 col-lg-6 mx-auto">
            <h2 className="mt-5 p-4">Edita tu Perfil</h2>
            <form
              onSubmit={handleSubmit(editSubmit)}
              className="form-control p-5 shadow rounded-4 "
            >
              <div className="mb-2">
                <label className="form-label">Tu nombre:</label>
                <input
                  disabled="true"
                  className="form-control"
                  type="text"
                  {...register("firstName")}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Tu Apellido:</label>
                <input
                  disabled="true"
                  className="form-control"
                  type="text"
                  {...register("lastName")}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Tu usuario:</label>
                <input
                  disabled="true"
                  className="form-control"
                  type="text"
                  {...register("username")}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Actualiza tu Correo Electronico:
                </label>
                <input
                  className="form-control"
                  placeholder="ejemplo@mail.com"
                  type="email"
                  {...register(
                    "email",
                    { required: true },
                    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i }
                  )}
                />
                {errors.email?.type === "required" && (
                  <small className="fail">
                    Debes ingresar tu correo actual o uno nuevo para confirmar..
                  </small>
                )}
                {errors.email?.type === "pattern" && (
                  <small className="fail">
                    El formato de email es incorrecto
                  </small>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">Cambia tu contraseña:</label>
                <input
                  className="form-control"
                  placeholder="Contraseña"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <small className="fail">
                    Debes ingresar tu actual contraseña o una nueva ..
                  </small>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Cambia o ingresa una nueva Imagen de Perfil (opcional)
                </label>
                <input
                  className="form-control"
                  placeholder="ingresa una url para tu imagen"
                  type="url"
                  {...register("image", { required: false })}
                />
              </div>
              <button type="submit">Editar mi Perfil</button>
              {errorEditForm && (
                <Error>*El mail ya se encuentra Registrado!</Error>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarUsuario;
