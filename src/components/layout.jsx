import React from 'react';
import Menu from "./menu.jsx";
import { Outlet } from "react-router-dom";
import '../index.css'

const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default Layout;