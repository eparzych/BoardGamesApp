import React, {useState} from "react";
import { SelectAddPlayer } from "./selectAddPlayer.js";
import { Navigation } from "./main/nav";
import { Footer } from "./main/footer.js";

export const AddPlay = () => {
    const [title, setTitle] = useState("");
    const [place, setPlace] = useState("");
    const [players, setPlayers] = useState(["Mario", "Grześ", "Monia"]);

    const handleAddNewPlayer = (playerName) => {
        setPlayers([
          ...players,
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
                    <label htmlFor="meeting-time">Wyberz datę:</label>
                    <input type="datetime-local" id="meeting-time"
                        name="meeting-time" value="2018-06-12T19:30"
                        min="2018-06-07T00:00" max="2030-12-14T00:00" />
                </div>
                <div>
                    <label>
                        Miejsce grania
                        <input type="text" placeholder="Miejsce grania" value={place} onChange={e => setPlace(e.target.value)} />
                    </label>
                </div>
                <SelectAddPlayer players={players} addNewPlayer={handleAddNewPlayer} />
                <p contenteditable="true">Wpisz ilość punktów</p>
                <div className="last">
                    <button className="btn">Zapisz</button>
                </div>
            </form>
        </section>
        <Footer />

        </>
)}
