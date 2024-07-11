import React from "react";

export default function InputField({ type, placeholder }) {
  return (
    <div className=" max-w-[350px] p-2 rounded-[4px] border-2 border-indigo-600 bg-white/5 my-1">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-indigo-600 placeholder:text-indigo-600 font-normal placeholder:font-semibold focus:outline-none focus:border-none border-none"
      />
    </div>
  );
}
