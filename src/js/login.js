import React, { useState } from "react";
import {
    Redirect,
  } from 'react-router-dom';

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [formMessage, setFormMessage] = useState([]);

  const clickSaveBtn = (e) => {
    e.preventDefault();

    const userInfo = {
      userName: login,
      userPassword: password,
    }

    localStorage.setItem("user", JSON.stringify(userInfo));
    console.log(userInfo);

    if (login.length < 3 || password < 3) {
      setFormMessage("Wypełnij poprawnie pola przynajmniej 3ma znakami!");
    } else {
      setRedirectToReferrer(true);
    }
  }

  if (redirectToReferrer){
    return <Redirect to="/main" />
  }

    return (
        <section className="section__login">
        <form className="form__login">
            <div>
              <label>
                Login
                <input className="login__input" 
                       type="text" 
                       placeholder="Login" 
                       value={ login } 
                       onChange={e => setLogin(e.target.value)}/>
              </label>
            </div>
            <div>
              <label>
                Hasło
                <input className="login__input" 
                       type="text" 
                       placeholder="Hasło" 
                       value={ password } 
                       onChange={e => setPassword(e.target.value)} />
              </label>
            </div>
            <button onClick={clickSaveBtn} className="btn btn__login">Zaloguj</button>
            <div className="Message">
              {formMessage}
            </div>
          </form>
    </section>
    )
}

