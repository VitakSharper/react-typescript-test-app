import React from 'react'

const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper  blue darken-1 px1">
            <a href="/" className="brand-logo">React+Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Some Link A</a></li>
                <li><a href="/">Some Link B</a></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
