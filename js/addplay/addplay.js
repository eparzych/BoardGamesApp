import React, {useState} from "react";
import { AddNewPlayer } from "./addNewPlayer.js";
import { Navigation } from "../main/nav";
import { Footer } from "../main/footer.js";

export const AddPlay = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [historyPlayers, setHistoryPlayers] = useState(["Mario", "Grześ", "Monia"]);

    const handleAddNewHistoryPlayer = (playerName) => {
        setHistoryPlayers([
          ...historyPlayers,
          playerName,
        ]);
      };

    return (
        <>
        <Navigation />
        <section className="add__new__play__bg">
            <form>
                <div>
                    <label>
                        Nazwa planszówki
                        <input type="text" placeholder="Nazwa planszówki" value={title} onChange={e => setTitle(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Wyberz datę:
                        <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} min="2018-06-07T00:00" max="2030-12-14T00:00" />
                    </label>
                </div>
                <div>
                    <label>
                        Miejsce grania
                        <input type="text" placeholder="Miejsce grania" value={place} onChange={e => setPlace(e.target.value)} />
                    </label>
                </div>
                <AddNewPlayer players={historyPlayers} addNewPlayer={handleAddNewHistoryPlayer} />
                <AddNewPlayer players={historyPlayers} addNewPlayer={handleAddNewHistoryPlayer} />
                {/* <button type="submit" onChange={handleAddNewPlayer}><i className="far fa-plus-square"></i></button> */}
   
                <div className="last">
                    <button className="btn">Zapisz</button>
                </div>

            </form>
        </section>
        <Footer />
        </>
)}
