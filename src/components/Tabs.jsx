import React, { useState, useContext } from "react";
import   { useTheme }  from "../context/ThemeContext";

const Tab = ({ setTypeTop, typeTop }) => {
    const { isDarkMode, toggleTheme, theme } = useTheme()

    const [activeLeft, setActiveLeft] = useState(0);
    const [activeRight, setActiveRight] = useState(0);

    return (
        <div className="flex flex-row  justify-between">
            {/* Left Tabs */}
            <div
                className={`flex flex-row gap-5 bg-opacity-10 w-[30%] rounded-xl p-1 ${theme.background} 
                }`}
            >
                <button
                    className={`flex-1 py-1 text-center rounded-l-xl  ${
                        activeLeft === 0 ? "underline text-primary" : `${theme.text}`
                    }`}
            
                    onClick={() => {
                        setActiveLeft(0);
                        setTypeTop("TG");
                    }}
                >
                   Top Gainers
                </button>
                <button
                    className={`flex-1 py-1 text-center rounded-r-xl ${
                        activeLeft === 1 ? "underline text-primary" : `${theme.text}`
                    }`}
                    onClick={() => {
                        setActiveLeft(1);
                        setTypeTop("TL");
                    }}
                >
                 Top   Losers
                </button>
            </div>

            {/* Right Tabs */}
            <div
                className={`flex flex-row bg-opacity-10 w-[60%] rounded-xl p-1 ${theme.background}
                }`}
            >
                <button
                    className={`flex-1 py-1 text-center rounded-l-xl ${
                        activeRight === 0 ? "underline text-primary" : `${theme.text}`
                    }`}
                    onClick={() => setActiveRight(0)}
                >
                    Yesterday
                </button>
                <button
                    className={`flex-1 py-1 text-center ${
                        activeRight === 1 ? "underline text-primary" : `${theme.text}`
                    }`}
                    onClick={() => setActiveRight(1)}
                >
                    Last Week
                </button>
                <button
                    className={`flex-1 py-1 text-center rounded-r-xl ${
                        activeRight === 2 ? "underline text-primary" : `${theme.text}`
                    }`}
                    onClick={() => setActiveRight(2)}
                >
                    Last Month
                </button>
            </div>
        </div>
    );
};

export default Tab;
