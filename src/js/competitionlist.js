import React from "react";
import { Navigation } from "./main/nav.js";
import { Search } from "./main/search";
import { BoardGamesSquare } from "./main/boardGamesSquare.js";
import { Footer } from "./main/footer.js";

export const CompetitionList = () => {
    return (
    <>
        <Navigation />
        <Search />
        <BoardGamesSquare />
        <Footer />
    </>
)}