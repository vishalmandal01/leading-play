import React from 'react'

export default function ButtonGradient({title}) {
  return (
    <button
    className="px-5 py-1.5 m-0.5"
    style={{
      border: "10px solid",
      borderImageSlice: "1",
      borderWidth: "3px",
      borderImageSource: "linear-gradient(to left, #743ad5, #4338ca)",
    }}
  >
    <span class="uppercase font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
      {title}
    </span>
  </button>
  )
}
