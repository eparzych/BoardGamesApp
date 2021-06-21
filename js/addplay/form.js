import React, { useState } from 'react';
import { AddNewPlayer } from "./addNewPlayer.js";


export const FormAddPlay = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [playerPoints, setPlayerPoints] = useState ([
        {
            id: 0,
            name: "",
            points: 0,
        }
    ]);
    
    const handleAddNewPlayerPoints = () => {
        setPlayerPoints([
            ...playerPoints,
            {
                id: playerPoints.length,
                name: "",
                points: 0,
            }
        ]);
      };

      const handleUpdatePlayer = (player) => {
        console.log("update", player);
        
        const newPlayers = playerPoints.map(playerPoint => {
            if(playerPoint.id === player.id){
                return player;
            } else {
                return playerPoint;
            }
        });
        setPlayerPoints(newPlayers);
        console.log(newPlayers);
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
                    <li key={player.id}><AddNewPlayer player={player} updatePlayer={handleUpdatePlayer} /></li>
                    ))}
            </ul>
            <button onClick={handleAddNewPlayerPoints}><i className="far fa-plus-square"></i></button>

            <div className="last">
                <button className="btn" onClick={ buttonSubmit }>Zapisz</button>
            </div>
        </form>
    </section>
    )}