import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

export const Login = () => {
    return (
        <section className="section__login">
        <form className="form__login" action="">
            <div>
              <label>
                Login
                <input type="text" placeholder="Login" />
              </label>
            </div>
            <div>
              <label for="">
                Hasło
                <input type="text" placeholder="Hasło" />
              </label>
            </div>
            <div className="last">
              <Link to = "/main" className="btn btn__login">Zaloguj</Link>
            </div>
          </form>
    </section>
    )
}

