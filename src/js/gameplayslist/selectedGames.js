import React from "react";


export const SelectedGames = (props) => {
    const {gameplay, setSelectedGame} = props;
    return(
        <section className="board__games container">
            <i className="escape__button far fa-times-circle"
                onClick={e => setSelectedGame(false)}></i>
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
