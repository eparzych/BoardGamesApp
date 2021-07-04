import React from "react";

export const BoardGamesSquare = ({gameplay, onClick}) => {
    return (
        <article className="board__game__played" onClick={onClick}>
            <h2 className="played__board__game__title">{gameplay.title}</h2>
            <span className="played__board__game__text">
                {gameplay.date} {gameplay.place}

                {/* <ul className="new__player">
                    {gameplay.players.map(player => (
                        <li key={player.id}> {player.name} {player.points} </li>
                        ))}
                </ul> */}
            </span>
        </article>
    )}
