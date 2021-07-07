import React from "react";
import {
    Link,
  } from 'react-router-dom';

export const SelectedGames = (props) => {
    const {gameplay} = props;
    return(
        <section className="board__games container">
            <Link to= "/main">
                <i className="escape__button far fa-times-circle"></i>
            </Link>
            <h1 className="board__games__title">{gameplay.title}</h1>
            <ul className="new__game">
                <li>Czas spotkania: {gameplay.date}</li>
                <li>Miejsce: {gameplay.place}</li>
                <li className="pleyer__list">Kto grał?</li>
                {gameplay.players.map(player => (
                    <li key={player.id}>
                        {player.name}
                        ({player.points}pkt)
                    </li>
                ))}
            </ul>
        </section>
    )
}
