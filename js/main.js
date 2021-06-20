import React from "react";
import { Navigation } from "./main/nav.js";
import { Header } from "./main/header.js";
import { Article } from "./main/article.js";
import { BoardGamesList } from "./main/boardGamesList";
import { Search } from "./main/search";
import { BoardGamesSquare } from "./main/boardGamesSquare.js";
import { Footer } from "./main/footer.js";



export const Main = () => {
    return (
    <>
        <Navigation />
        <Header />
        <Article />
        <BoardGamesList />
        <Search />
        <BoardGamesSquare />
        <Footer />
    </>
)}