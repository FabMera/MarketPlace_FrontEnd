
import { useUsers } from "./useUsers.js";
import { userContext } from "./userContext.js";

const UserProvider = ({ children }) => {
    const {
        users,
        getUsers,
        handlerAddUser,
        isAuth,
        setIsAuth,
        error,
        setError,
        initialUserForm,
        setUsers
    } = useUsers();

    return (
        <userContext.Provider
            value={{
                users,
                getUsers,
                handlerAddUser,
                isAuth,
                setIsAuth,
                error,
                setError,
                initialUserForm,
                setUsers
            }}
        >
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;
