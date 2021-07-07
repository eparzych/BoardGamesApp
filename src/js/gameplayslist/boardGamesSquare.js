import React from "react";

export const BoardGamesSquare = (props) => {
    const {gameplay, onClick} = props;
    return (
        <article onClick={onClick}>
            <h2 className="played__board__game__title">{gameplay.title}</h2>
            <span className="played__board__game__text">
                {gameplay.date} {gameplay.place}
            </span>
        </article>
    )}
