import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';


export const Main = () => {
    let imie = "Emilia";
    return (
        <>
<header className="header-index">
        <div className="header-index-bg"></div>
        <div className="header-index-text container">
            <div className="header-index-title">
                <h2>witaj ${imie} w <span className="logo__color1">Board</span><span className="logo__color2">GamesApp</span></h2>   
                <Link to ="/addplay" className="btn btn__add__play" >Dodaj rozgrywkę</Link>        
            </div>
        </div>
    </header>
  <main>
    <section className="container section__container">
        <div className="section__article">
            <h2 className="section__article__title">Lorem ipsum dolor sit</h2>
            <span className="section__article__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </span>
        </div>
    
        <div className="section__article">
            <h2 className="section__article__title">Lorem ipsum dolor sit</h2>
            <span className="section__article__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </span>
        </div>
    
        <div className="section__article">
            <h2 className="section__article__title">Lorem ipsum dolor sit</h2>
            <span className="section__article__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </span>
        </div>
    </section>

    <section  className="container bg">
        <h1 className="bg__title">Tytuły planszówek, w które było grane:</h1>
          <div className="bg-list">
              <ul>
                  <li>Kroniki zbroni <i className="fas fa-dice"></i></li>
                  <li>Detektyw <i className="fas fa-dice"></i></li>
                  <li>Kartografowie <i className="fas fa-dice"></i></li>
                  <li>Osadnicy wykreslane imperium <i className="fas fa-dice"></i></li>
                  <li>This World of Mine <i className="fas fa-dice"></i></li>
                  <li>Nemesis <i className="fas fa-dice"></i></li>
                  <li>Blood Rage <i className="fas fa-dice"></i></li>
                  <li>Wsiąść do pociąu <i className="fas fa-dice"></i></li>
                  <li>Valeria <i className="fas fa-dice"></i></li>
                  <li>Harry Potter ogwarts Bittle <i className="fas fa-dice"></i></li>
                  <li>Pandemic Legacy <i className="fas fa-dice"></i></li>
              </ul>
        </div>
    </section>


    <section className="container search">
        <form className="search__form">
            <input id="search-input" type="text"/>
            <button type="submit" className="btn btn-search"><i className="fas fa-search"></i> Wyszukaj planszówkę</button>            
        </form>
        <button className="btn"><i className="far fa-list-alt"></i></button>
        <button className="btn"><i className="fas fa-square"></i></button>
  
    </section>

    <section className="container board__games__played">

        <div className="played__game">            
            <article className="board__game__played">
                <h2 className="played__board__game__title">Lorem ipsum dolor sit</h2>
                <span className="played__board__game__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </span>
            </article>
            <article className="board__game__played">
                <h2 className="played__board__game__title">Lorem ipsum dolor sit</h2>
                <span className="played__board__game__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </span>
            </article>
            <article className="board__game__played">
                <h2 className="played__board__game__title">Lorem ipsum dolor sit</h2>
                <span className="played__board__game__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </span>
            </article>
            <article className="board__game__played">
                <h2 className="played__board__game__title">Lorem ipsum dolor sit</h2>
                <span className="played__board__game__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </span>
            </article>
        </div>
    </section>
    </main>
    </>
    )}