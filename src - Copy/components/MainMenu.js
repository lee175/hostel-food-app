import React from 'react';
import './css/MainMenu.css';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div className="main_menu blackbeard">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={{ pathname: "/profile" }}>Profile</Link></li>
                <li><Link to={{ pathname: "/order" }}>Orders</Link></li>
                <li><Link to={{ pathname: "/favourite" }}>Favourites</Link></li>
            </ul>
        </div>
    );
}

export default MainMenu;