import { createContext, useState,useContext,useEffect} from "react";

export const AuthContext =  createContext();


const AuthProvider = ({children}) =>{
    const [isAuthenticated,setAuthetication] = useState(false);
    // useEffect will log isAuthenticated after it updates
    useEffect(() => {
        console.log("Auth state updated:", isAuthenticated);
    }, [isAuthenticated]);

    const login = (username, password) =>{
        if(username == "admin" && password == "admin@123") setAuthetication(true);
    }
    // Logout function
    const logout = () => {
        setAuthetication(false);
    };

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider