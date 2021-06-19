import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

export const Navigation = () => {
    return (
    <nav className="nav">
        <div className="nav__container container">
            <Link to= "/" className="nav__logo"><span className="logo__color1">Board</span><span className="logo__color2">GamesApp</span></Link>
            <div className="navbar-nav">
                <NavLink to= "/" activeClassName = "nav__elem">Home</NavLink>
                <NavLink to = "/aboutus" activeClassName = "nav__elem"> o nas</NavLink>
                <NavLink to = "/portfolio" activeClassName = "nav__elem">planszówki</NavLink>
                <NavLink to = "/achievements" activeClassName = "nav__elem">osiągnięcia</NavLink>
                <NavLink to = "/contact" activeClassName = "nav__elem">kontakt</NavLink>
            </div>
        </div>
    </nav>
    )
}

    