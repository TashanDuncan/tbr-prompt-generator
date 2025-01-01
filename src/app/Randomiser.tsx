"use client";
import React, { useState } from "react";
import { isColour, getTextColorClass } from "./RandomiserUtils";

interface RandomiserProps {
  items: string[] | readonly string[];
  buttonText: string;
}

const Randomiser = ({ items, buttonText }: RandomiserProps) => {
  const [item, setItem] = useState<string | null>(null);

  const pickItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setItem(items[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center bg-pink-300 m-5">
      <button
        onClick={pickItem}
        className="px-4 py-2 mb-4 text-white bg-pink-400 rounded hover:bg-pink-700"
      >
        {buttonText}
      </button>
      {item && (
        <span
          className={`px-4 py-2 text-lg text-center ${
            isColour(item) ? getTextColorClass(item) : "text-pink-400"
          } bg-white border border-gray-300 rounded shadow`}
        >
          {item}
        </span>
      )}
    </div>
  );
};

export default Randomiser;
