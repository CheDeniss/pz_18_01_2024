import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import '../index.css'

const Menu = () => {
    const currentLocation = useLocation()

    return (
        <div className='nav-container'>
            <nav>
                <ul className="menu-ul">
                    <li><Link className={`menu-li ${currentLocation.pathname === '/starships' ? 'selected-menu' : ''}`} to="/starships">Кораблі</Link></li>
                    <li><Link className={`menu-li ${currentLocation.pathname === '/planets' ? 'selected-menu' : ''}`} to ="/planets">Планети</Link></li>
                    <li><Link className={`menu-li ${currentLocation.pathname === '/characters' ? 'selected-menu' : ''}`}  to="/characters">Персонажі</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
