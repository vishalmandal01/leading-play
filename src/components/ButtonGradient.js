import React from "react";

export default function ButtonGradient({ title, onClick }) {
  return (
    <button
      className="px-5 py-1.5 m-0.5 border-opacity-95 transition-all duration-300 transform hover:scale-105"
      style={{
        border: "10px solid",
        borderImageSlice: "1",
        borderWidth: "3px",
        borderImageSource: "linear-gradient(to left, #743ad5, #4338ca)",
      }}
      onClick={onClick}
    >
      <span className="uppercase font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
        {title}
      </span>
    </button>
  );
}
