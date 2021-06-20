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
                <NavLink to = "/main" activeClassName = "active__nav__elem" className = "nav__elem">Home</NavLink>
                <NavLink to = "/addplay" activeClassName = "active__nav__elem" className = "nav__elem"> Dodaj rozgrywkę</NavLink>
                <NavLink to = "/main#boardGamesList" activeClassName = "active__nav__elem" className = "nav__elem">Lista planszówek</NavLink>
                <NavLink to = "/main#boardGamesSquare" activeClassName = "active__nav__elem" className = "nav__elem">Lista rozgrywek</NavLink>
                <NavLink to = "/contact" activeClassName = "active__nav__elem" className = "nav__elem">Profil</NavLink>
            </div>
        </div>
    </nav>
    )
}

    