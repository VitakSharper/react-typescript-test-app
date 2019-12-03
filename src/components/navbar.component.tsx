import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper  blue darken-1 px1">
            <a href="/" className="brand-logo">React+Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Some Link A</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
