import React from "react";
import { useTheme } from "../context/ThemeContext";

const ToggleTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`flex items-center p-2 rounded-xl border border-blue-500  w-20 cursor-pointer ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`h-6 w-6 rounded-full flex items-center justify-center transition-transform transform ${
          isDarkMode ? "translate-x-8 bg-blue-500" : "translate-x-0 bg-yellow-400"
        }`}
      >
        {isDarkMode ? (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4 text-black"
        >
          <path d="M21.641 13.049a1 1 0 0 1 .117 1.993 9 9 0 0 1-10.8-10.8 1 1 0 0 1 1.993.117A7 7 0 1 0 21.641 13.05Z" />
          </svg>
        ) : (
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-white"
          >
            <path d="M12 2a1 1 0 0 1 .993.883L13 3v2a1 1 0 0 1-1.993.117L11 5V3a1 1 0 0 1 1-1Zm4.219.687a1 1 0 0 1 1.32-.083l.094.083 1.414 1.414a1 1 0 0 1-1.32 1.497l-.094-.083-1.414-1.414a1 1 0 0 1 0-1.414ZM7.404 3.13a1 1 0 0 1 1.32-.083l.094.083 1.414 1.414a1 1 0 0 1-1.32 1.497l-.094-.083L7.404 4.13a1 1 0 0 1 0-1.414ZM12 6a6 6 0 0 1 .255 11.995L12 18a6 6 0 0 1-.255-11.995L12 6Zm0 2a4 4 0 0 0-.195 7.995L12 16a4 4 0 0 0 .195-7.995L12 8ZM6.343 15.757a1 1 0 0 1 1.497 1.32l-.083.094-1.414 1.414a1 1 0 0 1-1.497-1.32l.083-.094 1.414-1.414Zm9.157 1.497a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1-1.32 1.497l-.094-.083-1.414-1.414Zm-4.72 1.096a1 1 0 0 1 .993.883L12 19v2a1 1 0 0 1-1.993.117L10 21v-2a1 1 0 0 1 1-1Z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ToggleTheme;
