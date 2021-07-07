import React, { useState } from "react";

export const Search = (props) => {
    const {gameplays, setFilteredGameplays} = props;
    const [search, setSearch] = useState("");

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
    )
}