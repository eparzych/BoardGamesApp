import React from "react";

export const SelectedGames = (props) => {
    const {gameplay} = props;
    return(
        <div className="modal">
            <section className="board__games container">
                <p>klikniety {gameplay.title}</p>
                <ul className="new__player">
                    {gameplay.players.map(player => (
                        <li key={player.id}>
                            {player.name}
                            {player.points}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
