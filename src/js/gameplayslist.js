import React, { useState, useEffect } from "react";
import { Navigation } from "./main/nav.js";
import { Search } from "./gameplayslist/search.js";
import { BoardgamesList } from "./gameplayslist/boardgamesList.js";
import { SelectedGames } from "./gameplayslist/selectedGames.js";
import { Footer } from "./main/footer.js";

export const GameplayList = () => {
    const [gameplays, setGameplays] = useState([]);
    const [filteredGameplays, setFilteredGameplays] = useState([]);
    const [selectedGame, setSelectedGame] = useState(false);

    
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
                setFilteredGameplays(data);
              }
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
    <>
        <Navigation />
        <Search gameplays={gameplays} setFilteredGameplays={setFilteredGameplays}/>
        { selectedGame === false 
            ? <BoardgamesList gameplays={filteredGameplays} setSelectedGame={setSelectedGame}/> 
            : <SelectedGames gameplay={selectedGame}/> 
        }
        <Footer />
    </>
    )
}