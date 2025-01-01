"use client";
import React, { useState } from "react";

export const PromptPicker = (prompts: { prompts: string[] }) => {
  const [prompt, setPrompt] = useState<string | null>(null);

  const pickPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.prompts.length);
    setPrompt(prompts.prompts[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center bg-pink-300 m-5">
      <button
        onClick={pickPrompt}
        className="px-4 py-2 mb-4 text-white bg-pink-400 rounded hover:bg-pink-700"
      >
        Pick a prompt
      </button>
      {prompt && (
        <p className="px-4 py-2 text-lg text-center text-pink-400 bg-white border border-gray-300 rounded shadow">
          {prompt}
        </p>
      )}
    </div>
  );
};
