import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import "../scss/style.scss";
import { Hello } from "./hello.js";
import { Login } from "./login.js";
import { Main } from "./main.js"
import { AddPlay } from "./addplay.js"
import { GameplayList } from "./gameplayslist.js"


const NotFound = () => {
    return <h1>404,Nothing is here</h1>;
}

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Hello} />
                <Route path='/login' component={Login} />
                <Route path='/main' component={Main} />
                <Route path='/addplay' component={AddPlay} />
                <Route path='/gameplayslist' component={GameplayList} />
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    )
}
  
ReactDOM.render(<App/>, document.getElementById("app"));