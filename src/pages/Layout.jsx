import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
const Layout = () =>{
    return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
    );
}

export default Layout;