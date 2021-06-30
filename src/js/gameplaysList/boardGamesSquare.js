import React from "react";
import { AddNewPlayer } from "../addplay/addNewPlayer";

export const BoardGamesSquare = ({gameplay}) => {
    return (
        <article className="board__game__played">
            <h2 className="played__board__game__title">{gameplay.title}</h2>
            <span className="played__board__game__text">
                {gameplay.date} {gameplay.place}

                {/* <ul className="new__player">
                    {gameplay.players.map(player => (
                        <AddNewPlayer key={player.id} player={player} />
                        ))}
                </ul> */}
            </span>
        </article>
    )}
