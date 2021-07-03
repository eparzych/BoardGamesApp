import React, { useState, useEffect } from "react";
import { Navigation } from "./main/nav.js";
import { BoardGamesSquare } from "./gameplaysList/boardGamesSquare.js";
import { Footer } from "./main/footer.js";

export const GameplayList = () => {
    const [gameplays, setGameplays] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredGameplays, setFilteredGameplays] = useState([]);
    
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

    const handleSearch = (e) => {
        e.preventDefault();
        const searchLower = search.toLowerCase();
        setFilteredGameplays(gameplays.filter(el => 
            el.title.toLowerCase().includes(searchLower) || 
            el.place.toLowerCase().includes(searchLower) ||
            el.date.toLowerCase().includes(searchLower)
            ))
    }

    return (
    <>
        <Navigation />
        <section className="container search">
            <form className="search__form">
                <input value={search} 
                       onChange={e => setSearch(e.target.value)} 
                       id="search-input" 
                       type="text"/>
                <button onClick={handleSearch} 
                        className="btn btn-search">
                        <i className="fas fa-search"></i> Wyszukaj planszówkę
                </button>            
            </form>
        </section>
        <div className="container article__list">
            <h1>Zagrane rozgrywki:</h1>
            <section className="board__games__played">
                <div className="played__game">            
                    {filteredGameplays.map(gameplay =>
                        <BoardGamesSquare key={gameplay.id} gameplay={gameplay} />
                    )}
                </div>
            </section>
        </div>
        <Footer />
    </>
)}