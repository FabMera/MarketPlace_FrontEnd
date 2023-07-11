import { useContext } from "react";
import { userContext } from "../Context/userContext";

const TodoComentarios = ({
  item,
  user,
  deleteComment,
  editComment,
  setComentario,
}) => {
  const {users,isAuth}=useContext(userContext)



  return (
    <div className="caja-commit mx-auto">
      <div className="comentario-p rounded shadow  ">
        <div className="picture-profile m-1 ">
          <img
            style={{ width: "55px" }}
            className="rounded-circle"
            src= {isAuth? users.map((item)=>item.image):user.picture}          
            alt=""
          />
        </div>
        <p style={{ height: 50 }} className="mt-1 p-1">
          Escrito por : <span style={{ color: "blue" }}> {isAuth? users.map((item)=>item.firstName):user.name}</span>{" "}
          <hr />
        </p>
        <p className="p-1">
          {setComentario}
          {item.commit}
        </p>
        <div className=" d-flex justify-content-end ">
          <i
          title="Editar comentario"
            onClick={() => editComment(item.id)}
            className="iconos-commit fa-regular fa-pen-to-square m-2"
          >
            {" "}
          </i>
          <i
          title="Eliminar comentario"
            onClick={() => deleteComment(item.id)}
            className="iconos-commit fa-regular fa-trash-can m-2"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TodoComentarios;
