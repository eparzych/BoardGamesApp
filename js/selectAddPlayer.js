import React, { useState } from 'react';

export const SelectAddPlayer = (props) => {
  const { players, addNewPlayer } = props;
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [showInput, setShowInput] = useState(false)

  const handleSelectPlayer = (event) => {
    if (event.target.value === 'Inny gracz') {
      setPlayerName('');
      setShowInput(true);
    } else {
      setShowInput(false);
    }
    setSelectedPlayer(event.target.value);
  }
  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewPlayer(playerName);
    setSelectedPlayer(playerName);
    setShowInput(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>Wybierz pojazd lub dodaj inny:</div>
      <select value={selectedPlayer} onChange={handleSelectPlayer}>
        <option />
        {players.map(player => <option key={player} value={player}>{player}</option>)}
        <option value="Inny gracz">Inny gracz</option>
      </select>
      <div style={{display: showInput ? 'block' : 'none'}}>
        <label>Nowy gracz:</label>
        <input name="newPlayer" value={playerName} onChange={handlePlayerNameChange} />
        <button type={'submit'}>Dodaj Gracza</button>
      </div>
    </form>
  );
}