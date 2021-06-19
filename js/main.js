import React from "react";
import { Navigation } from "./main/nav.js";
import { Header } from "./main/header.js";
import { BoardGamesList } from "./main/boardGamesList.js";
import { Article } from "./main/article.js";
import { Search } from "./main/search";
import { BoardGamesSquare } from "./main/boardGamesSquare.js";
import { Footer } from "./main/footer.js";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';


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