import React from "react";

export default function BorderButton({ title }) {
  return (
    <button className="uppercase hover:text-white border-2 border-indigo-600 hover:bg-indigo-700 max-w-[350px] py-2 rounded-[4px] px-3 my-1">
      {title}
    </button>
  );
}
