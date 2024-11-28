import React, { useState, useRef } from "react";
import { StockCard } from "./StockCard";
import { useTheme } from "../context/ThemeContext";

const ExchangeTab = () => {
    const { isDarkMode, theme } = useTheme();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedExchange, setSelectedExchange] = useState(null);
    const othersButtonRef = useRef(null);

    const stockData = [
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
        { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" }
        // ...your stockData here
    ];

    const stateExchange = {
        isLoading: false,
        exchange: [
            { id: 1, name: "NSDQ" },
            { id: 2, name: "LSE" },
            { id: 3, name: "NYSE" },
            { id: 4, name: "HKEX" },
            { id: 5, name: "BSE" },
            { id: 6, name: "BSE" },
            { id: 7, name: "BSE" },
            { id: 8, name: "BSE" },
            { id: 9, name: "BSE" },
        ],
    };

    const prioritizedExchanges = stateExchange.exchange.filter((exchange) =>
        ["NSDQ", "LSE", "NYSE", "HKEX"].includes(exchange.name)
    );

    const uniquePrioritizedExchanges = Array.from(
        new Map(prioritizedExchanges.map((item) => [item.name, item])).values()
    );

    const otherExchanges = stateExchange.exchange.filter(
        (exchange) => !["NSDQ", "LSE", "NYSE", "HKEX"].includes(exchange.name)
    );

    const visibleExchanges = [...uniquePrioritizedExchanges];

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    const handleExchangeClick = (exchange) => {
        setSelectedExchange(exchange.name);
        setDropdownVisible(false);
    };

    return (
        <div className={`p-4 min-h-screen ${theme.container}`}>
            {/* Exchange Tabs */}
            <div>
                {stateExchange.isLoading ? (
                    <div className="flex justify-center items-center">
                        <p className={`${theme.text}`}>Loading...</p>
                    </div>
                ) : (
                    <div className="flex space-x-4 overflow-x-auto w-[100%] gap-10 px-2 mt-2">
                        {[...visibleExchanges, { name: "Others", id: "others", items: otherExchanges }].map(
                            (item) =>
                                item.id === "others" ? (
                                    <button
                                        key={item.id}
                                        ref={othersButtonRef}
                                        className={`px-4 py-2 rounded-3xl w-[100px] ${
                                            selectedExchange === item.name
                                                ? "bg-blue-500 text-black"
                                                : `${theme.card} ${theme.text}`
                                        }`}
                                        onClick={toggleDropdown}
                                    >
                                        <span className="text-sm">Others</span>
                                    </button>
                                ) : (
                                    <button
                                        key={item.id}
                                        className={`px-4 py-2 rounded-3xl w-[100px] ${
                                            selectedExchange === item.name
                                                ? "bg-blue-500 text-black"
                                                : `${theme.card} ${theme.text}`
                                        }`}
                                        onClick={() => handleExchangeClick(item)}
                                    >
                                        {item.name}
                                    </button>
                                )
                        )}
                    </div>
                )}
            </div>

            {/* Dropdown for "Others" */}
            {isDropdownVisible && (
                <div
                    className={`absolute mt-2 ${theme.card} rounded-lg p-4 w-60 z-10 max-h-60 overflow-y-scroll`}
                >
                    {otherExchanges.map((exchange) => (
                        <div
                            key={exchange.id}
                            className={`p-2 hover:bg-neutral-600 cursor-pointer rounded ${theme.text}`}
                            onClick={() => handleExchangeClick(exchange)}
                        >
                            <span>{exchange.name}</span>
                        </div>
                    ))}
                </div>
            )}

            <header
                className={`flex flex-wrap gap-5 justify-between mt-14 w-full ${theme.text} max-w-[1030px] max-md:mt-10 max-md:max-w-full`}
            >
                <h1 className="text-xl font-medium">This week's top 10</h1>
                <time className="self-start text-xl">
                    Last Updated at <span className="text-cyan-400">3:57 PM</span>
                </time>
            </header>

            {/* Selected Exchange Display */}
            {selectedExchange && (
                <div className="mt-2">
                    <div className="flex flex-wrap gap-5 mt-8 max-md:mt-10 max-md:max-w-full">
                        {stockData.slice(0, 5).map((stock, index) => (
                            <StockCard key={index} {...stock} />
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-5 mt-8 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
                        {stockData.slice(5, 10).map((stock, index) => (
                            <StockCard key={index + 5} {...stock} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExchangeTab;
