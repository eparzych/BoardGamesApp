import React from 'react';

export const AddNewPlayer = (props) => {
  const { player, updatePlayer } = props;

  const handleChangeName = (e) => {
    const playerCopy = {
      ...player,
      name: e.target.value
    };
    if (typeof updatePlayer === "function") {
      updatePlayer(playerCopy);
    }
  }
  const handleChangePoints = (e) => {
    const playerCopy = {
      ...player,
      points: e.target.value
    };
    if (typeof updatePlayer === "function") {
      updatePlayer(playerCopy);
    }
  }

  return (
    <>
        <label>Wpisz imię gracza:
          <input className="new__play__input" type="text" 
                 name="name"
                 placeholder="Wpisz imię gracza"
                 value={player.name} 
                 onChange={handleChangeName} />
        </label>
        <label>
            Wpisz ilość punktów:
            <input className="new__play__input" type="text"
                   name="points" 
                   placeholder="Wpisz ilość punktów" 
                   value={player.points} 
                   onChange={handleChangePoints} />
        </label>
  </>
)}