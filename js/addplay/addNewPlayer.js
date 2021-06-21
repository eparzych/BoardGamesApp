import React, { useState } from 'react';



export const AddNewPlayer = (props) => {
  const { player, updatePlayer } = props;

  const handleChangeName = (event) => {
    const playerCopy = {...player};
    playerCopy.name = event.target.value;
    if (typeof updatePlayer === "function") {
      updatePlayer(playerCopy);
    }
  }

  const handleChangePoints = (event) => {
    const playerCopy = {...player};
    playerCopy.points = event.target.value;
    if (typeof updatePlayer === "function") {
      updatePlayer(playerCopy);
    }
  }

  return (
    <>
    <div>
        <label>Nowy gracz:
          <input value={player.name} onChange={handleChangeName} />
        </label>
        <label>
            Wpisz ilość punktów
            <input type="text" placeholder="Wpisz ilość punktów" value={player.points} onChange={handleChangePoints} />
        </label>
    </div>
</>

  )}