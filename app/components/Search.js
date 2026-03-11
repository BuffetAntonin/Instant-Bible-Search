// src/components/Search.js
import React, { useState } from 'react';

// Exemple de tableau de versets
const verses = [
  "Jean 3:16 - Car Dieu a tant aimé le monde...",
  "Psaume 23:1 - L'Éternel est mon berger...",
  "Proverbes 3:5 - Confie-toi en l'Éternel de tout ton cœur..."
];

export default function Search() {
  const [currentVerse, setCurrentVerse] = useState("");

  const displayVerse = (verse) => {
    setCurrentVerse(verse);
  };

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    displayVerse(verses[randomIndex]);
  };

  return (
    <div>
      <button onClick={getRandomVerse}>Obtenir un verset aléatoire</button>
      <p>{currentVerse}</p>
    </div>
  );
}