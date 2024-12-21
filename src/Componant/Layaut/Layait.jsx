import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
function Layait() {
    return ( <>

        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

    </> );
}

export default Layait;