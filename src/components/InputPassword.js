"use client";

import React, { useState } from "react";

export default function InputPassword({ type, placeholder }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    return (
      <div className="relative max-w-[350px] p-2 rounded-[4px] border-2 border-indigo-600 bg-white/5 my-1">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full bg-transparent text-indigo-600 placeholder:text-indigo-600 font-normal placeholder:font-semibold focus:outline-none focus:border-none border-none"
        />
  
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
  