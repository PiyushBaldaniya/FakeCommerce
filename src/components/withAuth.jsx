import { useContext } from "react"
import { AuthContext } from "../context/usercontext"
import { Link, Navigate,useLocation } from "react-router-dom";


const withAuth = (WrappedComponent) =>{

    return(props)=>{
        const {isAuthenticated} = useContext(AuthContext);
        const location = useLocation(); 

        if(isAuthenticated){
           return <WrappedComponent {...props}/>        }
        else{
           return <Navigate to="/Login" replace state={{ from: location.pathname }} ></Navigate>
        }
    }
} 

export default withAuth;