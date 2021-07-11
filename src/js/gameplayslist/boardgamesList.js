import React from "react";
import { BoardGamesSquare } from "./boardGamesSquare.js";

export const BoardgamesList = (props) => {
    const {gameplays, setSelectedGame} = props;

    const deleteGameplay = (gameplayId) => {
        fetch(`http://localhost:3000/gameplays/${gameplayId}`, {
          method: 'DELETE',
        }).then(res => {
          if (res.ok) {
            setGameplays(gameplays.filter(gameplay => gameplay.id !== gameplayId));
          }
        })
      }

    const handleSellGame = (gameplayId) => {
        deleteGameplay(gameplayId)
      }

    return (
        <div className="container article__list">
            <h1>Zagrane rozgrywki:</h1>
            <section className="board__games__played">
                     <div className="played__game">            
                        {gameplays.map(gameplay =>
                            <BoardGamesSquare 
                                key={gameplay.id} 
                                gameplay={gameplay} 
                                onClick={ e => setSelectedGame(gameplay)} 
                                onDelete={handleSellGame}/>
                            )}
                    </div>
            </section>
        </div>
    )
}


