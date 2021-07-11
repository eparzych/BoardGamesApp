import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AddNewPlayer } from "./addNewPlayer.js";

export const FormAddPlay = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [players, setPlayers] = useState ([{
        id: 0,
        name: "",
        points: 0,
        background: ""
    }]);
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    
    // 1. TWORZENIE NOWEGO OBIEKTU W STANIE PO WCIŚNIĘCIU +
    const handleAddNewPlayer = (e) => {
        e.preventDefault();
        const colorHex = `#fa${Math.floor(Math.random()*10)}`;

        setPlayers(prevPlayers => [...prevPlayers, {
            id: prevPlayers.length,
            name: "",
            points: 0,
            background: colorHex
        }]);
    }

    //3. AKTUALIZACJA STANU Z GRACZEM PRZEKAZANYM DO PROPSÓW
    const handleUpdatePlayer = (updatedPlayer) => {
        setPlayers(prevPlayers => prevPlayers.map(player => {
            if(player.id === updatedPlayer.id){
                return updatedPlayer;
            } else {
                return player;
            }
        }));
    }

    const buttonSubmit = (e) => {
        e.preventDefault();
        const dataForm = {
            title,
            date,
            place,
            players
        }
        
        fetch("http://localhost:3000/gameplays", {
            method: "POST",
            body: JSON.stringify(dataForm),            
            headers: {
                "Content-Type": "application/json"
            }
        })
        return setRedirectToReferrer(true);
    };

    if (redirectToReferrer){
        return <Redirect to="/gameplayslist" />
      }

    return (
    <section className="add__new__play__bg">
        <form>
            <div>
                <label>
                    Nazwa planszówki
                    <input  className="new__play__input" type="text" placeholder="Nazwa planszówki" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Wyberz datę:
                    <input className="new__play__input" type="date" value={date} onChange={e => setDate(e.target.value)} min="2018-06-07" max="2030-12-14" />
                </label>
            </div>
            <div>
                <label>
                    Miejsce grania
                    <input className="new__play__input" type="text" placeholder="Miejsce grania" value={place} onChange={e => setPlace(e.target.value)} />
                </label>
            </div>
            <ul>
                {/* 2.PRZEKAZANIE NOWO UTWORZONEGO OBIEKTU GRACZA DO PROPSÓW  */}
                {players.map(player => (
                    <li key={player.id}>
                        <AddNewPlayer player={player} updatePlayer={handleUpdatePlayer} />
                    </li>
                    ))}
            </ul>
            {players.length <= 6 &&
                <button className="add__player" onClick={handleAddNewPlayer}>
                    <i className="far fa-plus-square"></i>
                </button>
            }
            <div className="last">
                <button className="btn" onClick={ buttonSubmit }>Zapisz</button>
            </div>
        </form>
    </section>
    )}