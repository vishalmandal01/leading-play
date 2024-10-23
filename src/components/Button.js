import React from "react";

export default function Button({ title }) {
  return (
    <button className="uppercase text-white bg-indigo-600 hover:bg-indigo-700 max-w-[350px] py-2 rounded-[4px] px-3 my-1">
      {title}
    </button>
  );
}
