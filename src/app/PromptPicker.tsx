"use client";
import React from "react";

export const PromptPicker = (prompts: { prompts: string[] }) => {
  const [prompt, setPrompt] = React.useState<string | null>(null);

  const pickPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.prompts.length);
    setPrompt(prompts.prompts[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={pickPrompt}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Pick a prompt
      </button>
      {prompt && (
        <p className="px-4 py-2 text-lg text-center text-gray-800 bg-white border border-gray-300 rounded shadow">
          {prompt}
        </p>
      )}
    </div>
  );
};
