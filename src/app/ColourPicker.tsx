"use client";
import React, { useState } from "react";

export const ColourPicker = () => {
  const [colour, setColour] = useState<string | null>(null);

  const pickColour = () => {
    const colours = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "pink",
    ];
    const randomIndex = Math.floor(Math.random() * colours.length);
    setColour(colours[randomIndex]);
  };

  const getTextColorClass = (colour: string) => {
    switch (colour) {
      case "red":
        return "text-red-500";
      case "blue":
        return "text-blue-500";
      case "green":
        return "text-green-500";
      // Add more cases as needed
      default:
        return "text-pink-400";
    }
  };

  return (
    <div className="flex flex-col items-center bg-pink-300 m-5">
      <button
        onClick={pickColour}
        className="px-4 py-2 mb-4 text-white bg-pink-400 rounded hover:bg-pink-700"
      >
        Pick a Colour
      </button>
      {colour && (
        <span
          className={`px-4 py-2 text-lg text-center ${getTextColorClass(
            colour
          )} bg-white border border-gray-300 rounded shadow`}
        >
          {colour}
        </span>
      )}
    </div>
  );
};
