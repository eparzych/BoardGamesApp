import React from "react";
import ReactDOM from "react-dom";

export const Search = () => {
    return (
        <section className="container search">
        <form className="search__form">
            <input id="search-input" type="text"/>
            <button type="submit" className="btn btn-search"><i className="fas fa-search"></i> Wyszukaj planszówkę</button>            
        </form>
        <button className="btn"><i className="far fa-list-alt"></i></button>
        <button className="btn"><i className="fas fa-square"></i></button>
  
    </section>
    )}