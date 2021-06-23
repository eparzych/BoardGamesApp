import React, { useState } from 'react';
import { AddNewPlayer } from "./addNewPlayer.js";

export const FormAddPlay = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [name, setName] = useState ("");
    const [points, setPoints] = useState ("");
    const [playersPoints, setPlayersPoints] = useState ([]);
    
    const handleAddNewPlayerPoints = (e) => {
        e.preventDefault();
        setPlayersPoints(prevPlayersPoints => [...prevPlayersPoints, {
            id: prevPlayersPoints.length,
            name,
            points
        }]);
        setName("");
        setPoints("");
    }

      const buttonSubmit = (e) => {
        e.preventDefault();
          const dataForm = {
              title,
              date,
              place,
              playersPoints
          }
          console.log(dataForm);
      } 

    return (
    <section className="add__new__play__bg">
        <form>
            <label >
                Nazwa planszówki
                <input className="new__play__input" type="text" placeholder="Nazwa planszówki" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Wyberz datę:
                <input className="new__play__input" type="datetime-local" value={date} onChange={e => setDate(e.target.value)} min="2018-06-07T00:00" max="2030-12-14T00:00" />
            </label>
            <label>
                Miejsce grania
                <input className="new__play__input" type="text" placeholder="Miejsce grania" value={place} onChange={e => setPlace(e.target.value)} />
            </label>
            <label>
                Nowy gracz:
                <input className="new__play__input" type="text" 
                        name="name"
                        placeholder="Wpisz imię gracza"
                        value={name} 
                        onChange={e => setName(e.target.value)}  />
            </label>
            <label>
                Wpisz ilość punktów
                <input className="new__play__input"
                        type="text"
                        name="points" 
                        placeholder="Wpisz ilość punktów" 
                        value={points} 
                        onChange={e => setPoints(e.target.value)}  />
            </label>
            <button onClick={handleAddNewPlayerPoints}><i className="far fa-plus-square add__player"></i></button>
            <ul className="new__player">
                {playersPoints.map(player => (
                        <AddNewPlayer key={player.id} player={player} />
                    ))}
            </ul>
            <button className="btn btn__submit" onClick={ buttonSubmit }>Zapisz</button>
        </form>
    </section>
    )}