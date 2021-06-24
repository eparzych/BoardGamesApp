import React, { useState } from 'react';

export const AddNewPlayer = (props) => {
  const { player} = props;

  return (
    <li>
      {player.name} uzyskał(a) {player.points} punktów
    </li>
)}