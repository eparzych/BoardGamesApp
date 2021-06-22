import React, { useState } from 'react';

export const AddNewPlayer = (props) => {
  const { player, updatePlayer } = props;
  const { name, setName } = useState();
  const { points, setPoints } = useState();
  
  // player = {
  //   id
  //   name,
  //   points
  // }

  const handleChangeName = (e) => {
    e.preventDefault();
    player.name = e.target.value;
    setName(player.name);
    updatePlayer(name);
    console.log(player);
  }

  const handleChangePoints = (e) => {
    e.preventDefault();
    player.points = e.target.value;
    setPoints(player.points);
    updatePlayer(points);
    console.log(player);
  }

  return (
    <>
    <form>
        <label>Nowy gracz:
          <input type="text" 
                 name="name"
                 placeholder="Wpisz imię gracza"
                 value={name} 
                 onChange={handleChangeName} />
        </label>
        <label>
            Wpisz ilość punktów
            <input type="text"
                   name="points" 
                   placeholder="Wpisz ilość punktów" 
                   value={points} 
                   onChange={handleChangePoints} />
        </label>
    </form>
  </>
)}