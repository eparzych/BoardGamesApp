import React, { useState } from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
    return (
        <section className="section__login">
        <form className="form__login" action="">
            <div>
              <label>
                Login
                <input type="text" placeholder="Login" value={ Login } onChange={e => setLogin(e.target.value)}/>
              </label>
            </div>
            <div>
              <label for="">
                Hasło
                <input type="text" placeholder="Hasło" value={ password } onChange={e => setPassword(e.target.value)} />
              </label>
            </div>
            <div className="last">
              <Link to = "/main" className="btn btn__login">Zaloguj</Link>
            </div>
          </form>
    </section>
    )
}

