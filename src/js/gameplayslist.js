import React, { useState, useEffect } from "react";
import { Navigation } from "./main/nav.js";
import { Search } from "./gameplaysList/search.js";
import { BoardGamesSquare } from "./gameplaysList/boardGamesSquare.js";
import { Footer } from "./main/footer.js";

export const GameplayList = () => {
    const [gameplays, setGameplays] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/gameplays")
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            console.log('responseData', data);
            if (data) {
                setGameplays(data);
              }
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
    <>
        <Navigation />
        <Search />
        <div className="container article__list">
            <h1>Zagrane rozgrywki:</h1>
            <section className="board__games__played">
                <div className="played__game">            
                    {gameplays.map(gameplay =>
                        <BoardGamesSquare gameplay={gameplay} />
                    )}
                </div>
            </section>
        </div>
        <Footer />
    </>
)}