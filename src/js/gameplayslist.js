import React, { useState, useEffect } from "react";
import { Navigation } from "./main/nav.js";
import { List } from "./gameplaysList/list.js";
import { ClickArticle  } from "./gameplaysList/clickArticle.js";


import { Footer } from "./main/footer.js";

export const GameplayList = () => {
    const [gameplays, setGameplays] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredGameplays, setFilteredGameplays] = useState([]);
    const [gameplayClick, setGameplayClick] = useState(false);
    
    return (
    <> 
        <Navigation />
        { gameplayClick === false ? <List /> : <ClickArticle /> }
        <Footer />
    </>
    )
}