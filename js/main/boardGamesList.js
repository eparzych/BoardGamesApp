import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';


export const BoardGamesList = () => {
    return (
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
    )
}