import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { TimelineMax } from "gsap";

const MainMenu = ({ windowDimensions }) => {

    let drop = false;

    function dropDown(d) {
        if (d) {
            const tl = new TimelineMax();
            tl.to(".drop_down", .4, { y: 0 });
            drop = false;
        }
        else {
            const tl = new TimelineMax();
            tl.to(".drop_down", .6, { y: 500 });
            drop = true;
        }
    }

    const [width, height] = windowDimensions();
    const bigMenu = <div className="main_menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={{ pathname: "/profile" }}>Profile</Link></li>
            <li><Link to={{ pathname: "/orders" }}>Orders</Link></li>
        </ul>
    </div>;

    const smallMenu = <div className="main_menu">
        <div><h2>App Name</h2><div className="naviButton" onClick={() => drop ? dropDown(true) : dropDown(false)}>H</div></div>
        <div className="drop_down">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={{ pathname: "/profile" }}>Profile</Link></li>
                <li><Link to={{ pathname: "/orders" }}>Orders</Link></li>
            </ul>
        </div>
    </div >;

    return (width <= 991 ? smallMenu : bigMenu);
}

export default MainMenu;