import React, { useState } from 'react';
import { SelectAddPlayer } from './selectAddPlayer.js';



export const AddNewPlayer = (props) => {
  const { players, addNewPlayer } = props;
  const [points, setPoints] = useState("");

  return (
    <>
    <SelectAddPlayer players={players} addNewPlayer={addNewPlayer} />
    <div>
        <label>
            Wpisz ilość punktów
            <input type="text" placeholder="Wpisz ilość punktów" value={points} onChange={e => setPoints(e.target.value)} />
        </label>
    </div>
</>

  )}
