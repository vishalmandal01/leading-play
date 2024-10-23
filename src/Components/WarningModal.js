"use client";
import { useEffect } from "react";

const WarningModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="bg-white p-6 rounded shadow-lg max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">WARNING!</h2>
        <p className="mb-4">
          This game contains sexually explicit content and coarse language that
          is not suitable for age under 18. “shydevlopers” will not be liable
          for any damages, injuries, offense, or ejaculation taken while playing
          this game.
        </p>
        <p>Play at your own risk. You have been warned.</p>
        <div className="mt-4 flex justify-around">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Yes
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
