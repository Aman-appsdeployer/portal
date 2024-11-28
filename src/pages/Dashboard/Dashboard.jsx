import * as React from "react";
import { StockCard } from "../../components/StockCard";
import { NewsCard } from "../../components/NewsCard";
import WatchlistItem from "../../components/WatchlistItem";
import ExchangeTab from "../../components/ExchangeTab";
import { useTheme } from "../../context/ThemeContext";
import ToggleTheme from "../../components/Toggle";
import Tabs from "../../components/tabs";

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
    { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },
    { name: "Cipla Ltd", price: "₹239.00", change: "+9.10", percentage: "3.63", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/42a275e82ff9de8fe58a85cfa071e85395342491eb8de350c2e3aa70b3aad583?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3236ebd5a058f51345f09eb6c84fc2e385bd31705b344b368c4d82d4e44e84?placeholderIfAbsent=true&apiKey=90b7ff433fe24aa1a96e688cb0ab4bd9" },

];

const newsData = [
    {
        image: "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/c9f484b1941a2421a7534c9f09596ea76e62caf85cbcba0b56d0b609c251a6a5?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
        title: "RVNL",
        description: "Has awarded BCPL Railway Infrastructure Ltd. an order at Rs 71 crore for upgrading the electric traction system."
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/c9f484b1941a2421a7534c9f09596ea76e62caf85cbcba0b56d0b609c251a6a5?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
        title: "RVNL",
        description: "Has awarded BCPL Railway Infrastructure Ltd. an order at Rs 71 crore for upgrading the electric traction system."
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/c9f484b1941a2421a7534c9f09596ea76e62caf85cbcba0b56d0b609c251a6a5?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
        title: "RVNL",
        description: "Has awarded BCPL Railway Infrastructure Ltd. an order at Rs 71 crore for upgrading the electric traction system."
    },

    // Repeat for other news items...
];



const filterCategories = [
    { label: "Top Gainers", color: "cyan-400", filters: ["LSE"] },
    { label: "Top Losers", color: "white", filters: ["NSDQ"], active: true },
    {
        label: "Yesterday",
        color: "cyan-400",
        filters: ["NYSE"],
        subFilters: ["Last week", "Last Month", "Others"],
    },
];


export default function Dashboard() {
    const { isDarkMode, toggleTheme, theme } = useTheme();
    return (
        <main className={`flex overflow-hidden flex-col border border-solid ${theme.container, theme.border} border-opacity-1 rounded-[50px] ${theme.background} `}>

            {/* Market Ticker Section */}

            {/* Main Content */}
            <div className="max-w-[1863px] max-md:mt-10 max-md:max-w-full">
                <div className="flex max-md:flex-col ">
                    {/* Watchlist Section */}


                    {/* Stock Cards Section */}
                    <main className="flex flex-col rounded-none ">
                        <section
                            className={`flex flex-col w-full max-md:px-5 max-md:pb-24 max-md:max-w-full ${theme.border}`}
                        >
                            <nav className={`p-5 max-w-full ${theme.container}`}>
                                <Tabs />
                                <ExchangeTab />
                            </nav>
                        </section>
                    </main>
                </div>
            </div>
        </main>
    );
}