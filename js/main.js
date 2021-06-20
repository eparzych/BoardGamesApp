import React from "react";
import { Navigation } from "./main/nav.js";
import { Header } from "./main/header.js";
import { Article } from "./main/article.js";
import { Search } from "./main/search";
import { BoardGamesSquare } from "./main/boardGamesSquare.js";
import { Footer } from "./main/footer.js";



export const Main = () => {
    return (
    <>
        <Navigation />
        <Header />
        <Article />
        <Search />
        <BoardGamesSquare />
        <Footer />
    </>
)}