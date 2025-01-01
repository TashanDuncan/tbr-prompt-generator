"use client";
import React from "react";

export const RandomLetterPicker = () => {
  const [letter, setLetter] = React.useState<string | null>(null);

  const pickLetter = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    setLetter(alphabet[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center bg-pink-300">
      <button
        onClick={pickLetter}
        className="px-4 py-2 mb-4 text-white bg-pink-400 rounded hover:bg-pink-700"
      >
        Pick a letter
      </button>
      {letter && (
        <p className="px-4 py-2 text-lg text-center text-pink-400 bg-white border border-gray-300 rounded shadow">
          {letter}
        </p>
      )}
    </div>
  );
};
