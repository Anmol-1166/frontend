import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [loggedIn, setloggedIn] = useState(false);

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.removeItem('user');
        setloggedIn(false);
        navigate('/login');
    }

    return <UserContext.Provider value={{loggedIn,setloggedIn,logout}}>
        {children}
    </UserContext.Provider>
};

const useUserContext = () => { return useContext( UserContext ) };

export default useUserContext;