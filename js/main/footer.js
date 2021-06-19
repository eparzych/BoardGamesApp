import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';


export const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__copyright">
                    &copy; Copyright <Link to="/main" class="footer__link">www.BoardGamesApp.pl</Link>
                </div>
                <div class="footer__icons">
                    <i class="fab fa-facebook-square "></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram"></i>
                 </div>
            </div>
        </footer>
    )}