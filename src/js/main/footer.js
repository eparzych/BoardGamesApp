import React from "react";
import {
    Link,
  } from 'react-router-dom';


export const Footer = () => {
    return (
        <footer className = "footer">
            <div className = "footer__container">
                <div className = "footer__copyright">
                    &copy; Copyright <Link to="/main" className = "footer__link">www.BoardGamesApp.pl</Link>
                </div>
                <div className = "footer__icons">
                    <a href = "http://facebook.com"><i className = "fab fa-facebook-square" /></a>
                    <a href = "http://twitter.com"><i className = "fab fa-twitter-square" /></a>
                    <a href = "http://instagram.com"><i className = "fab fa-instagram" /></a>
                 </div>
            </div>
        </footer>
    )}