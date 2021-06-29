import React from "react";
import { Link } from 'react-router-dom';

export const Hello = () => {
    return (
        <header className = "header-hello">
            <div className = "hero-text">
                <Link to ="/login" className = "hero-title">
                    <h2>witajcie w <span className = "logo__color1">Board</span><span className = "logo__color2">GamesApp</span></h2>            
                    <p>W miejscu gdzie gramy z pasją</p>
                </Link>
            </div>
        </header> 
    )
}