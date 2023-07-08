import axios from "axios";

const endpointuser = "http://localhost:8000/users/";

export const cargarUsuarios = async (setUsers) => {
  const res = await axios.get(endpointuser);
  const info = res.data;
  console.log(info);

  const dataUsuarios = info.map((ele) => ({
    id: ele.id,
    firstName: ele.firstName,
    lastName: ele.lastName,
    image: ele.image,
    email: ele.email,
    username: ele.username,
    password: ele.password,
  }));
  setUsers(dataUsuarios);
};
