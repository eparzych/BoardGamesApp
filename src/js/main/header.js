import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';


export const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    let imie = user.userName;
    return (
        <header className="header-index">
            <div className="header-index-bg"></div>
            <div className="header-index-text container">
                <div className="header-index-title">
                    <h2>witaj {imie} w <span className="logo__color1">Board</span><span className="logo__color2">GamesApp</span></h2>   
                    <Link to ="/addplay" className="btn btn__add__play">Dodaj rozgrywkę</Link>        
                </div>
            </div>
        </header>
    )
}