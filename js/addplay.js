import React from "react";
import ReactDOM from "react-dom";

export const AddPlay = () => {
    return (
    <>
        <section className="section__login container">
            <form action="">
                <div>
                    <label for="">
                        Nazwa planszówki
                        <input type="text" placeholder="Nazwa planszówki" />
                    </label>
                </div>
                <div>
                    <label for="meeting-time">Choose a time for your appointment:</label>
                    <input type="datetime-local" id="meeting-time"
                        name="meeting-time" value="2018-06-12T19:30"
                        min="2018-06-07T00:00" max="2018-06-14T00:00" />
                </div>
                <div>
                    <label for="">
                        Miejsce grania
                        <input type="text" placeholder="Miejsce grania" />
                    </label>
                </div>
                <div>
                    <ul>
                        <li><div>Wybór gracza</div>
                            <label for=""> Imie gracza
                                <input type="text" placeholder="Imie gracza" />
                            </label>
                            <p contenteditable="true">Wpisz ilość punktów</p>
                        </li>
                    </ul>
                </div>
                <div className="last">
                    <button className="btn">Zapisz</button>
                </div>
            </form>
        </section>
    </>
)}