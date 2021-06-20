import React, { useState } from 'react';
import { AddNewPlayer } from "./addNewPlayer.js";


export const FormAddPlay = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [historyPlayers, setHistoryPlayers] = useState(["Mario", "Grześ", "Monia"]);
    const [playerPoints, setPlayerPoints] = useState ([]);

    const handleAddNewHistoryPlayer = (playerName) => {
        setHistoryPlayers([
          ...historyPlayers,
          playerName,
        ]);
      };
    
    const handleAddNewPlayerPoints = () => {
        setPlayerPoints([
            ...playerPoints,
            {
                id: playerPoints.length,
                name: "",
                points: 0,
            }
        ]);
        console.log("add");
      };

      const buttonSubmit = () => {
          const dataForm = {
              title,
              date,
              place,
              playerPoints
          }
          console.log(dataForm);
      } 

    return (
    <section className="add__new__play__bg">
        <form>
            <div>
                <label>
                    Nazwa planszówki
                    <input type="text" placeholder="Nazwa planszówki" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Wyberz datę:
                    <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} min="2018-06-07T00:00" max="2030-12-14T00:00" />
                </label>
            </div>
            <div>
                <label>
                    Miejsce grania
                    <input type="text" placeholder="Miejsce grania" value={place} onChange={e => setPlace(e.target.value)} />
                </label>
            </div>
            <ul>
                {playerPoints.map(player => (
                    <li key={player.id}><AddNewPlayer players={historyPlayers} addNewPlayer={handleAddNewHistoryPlayer} /></li>
                    ))} 
            </ul>
            <button type="submit" onClick={handleAddNewPlayerPoints}><i className="far fa-plus-square"></i></button>

            <div className="last">
                <button className="btn" onClick={ buttonSubmit }>Zapisz</button>
            </div>
        </form>
    </section>
    )}