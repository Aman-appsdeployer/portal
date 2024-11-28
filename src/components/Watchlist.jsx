import React from 'react';
import { useTheme } from '../context/ThemeContext';
import WatchlistItem from './WatchlistItem';

const watchlistData = [

    {
        name: "BRITANNIA",
        exchange: "NSE",
        description: "Britannia Industries Ltd",
        chart: "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/3b3caa4ba027c6fd53a74ce496c7666bd2f9e1f98a1887ff12f9c7a00d184911?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
        price: "USD 5,741.85",
        change: "+82.7",
        percentChange: "1.46"
    },
    {
        name: "BRITANNIA",
        exchange: "NSE",
        description: "Britannia Industries Ltd",
        chart: "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/3b3caa4ba027c6fd53a74ce496c7666bd2f9e1f98a1887ff12f9c7a00d184911?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
        price: "USD 5,741.85",
        change: "+82.7",
        percentChange: "1.46"
    },
    {
        name: "BRITANNIA",
        exchange: "NSE",
        description: "Britannia Industries Ltd",
        chart: "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/3b3caa4ba027c6fd53a74ce496c7666bd2f9e1f98a1887ff12f9c7a00d184911?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
        price: "USD 5,741.85",
        change: "+82.7",
        percentChange: "1.46"
    },
    {
        name: "BRITANNIA",
        exchange: "NSE",
        description: "Britannia Industries Ltd",
        chart: "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/3b3caa4ba027c6fd53a74ce496c7666bd2f9e1f98a1887ff12f9c7a00d184911?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
        price: "USD 5,741.85",
        change: "+82.7",
        percentChange: "1.46"
    },
    {
        name: "BRITANNIA",
        exchange: "NSE",
        description: "Britannia Industries Ltd",
        chart: "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/3b3caa4ba027c6fd53a74ce496c7666bd2f9e1f98a1887ff12f9c7a00d184911?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
        price: "USD 5,741.85",
        change: "+82.7",
        percentChange: "1.46"
    },
    // Repeat for other watchlist items...
];
function Watchlist(props) {
    const { isDarkMode, toggleTheme,theme } = useTheme();
    return (
       
        <section
            className={`flex flex-col grow pt-5 pb-5 w-full border border-solid ${theme.container } ${theme.border} border-opacity-1 rounded-[50px] max-md:mt-5 max-md:max-w-full`}
        >
            <h2 className={`self-start ml-11 text-3xl font-medium ${theme.text} max-md:ml-2.5`}>Watchlist</h2>
            <hr className={`shrink-0 mt-5 h-px border border-solid ${theme.border}  max-md:mt-10 max-md:max-w-full`} />
            <div className="flex flex-col px-6 mt-5 w-full max-md:px-5 max-md:max-w-full">
                {watchlistData.map((item, index) => (
                    <WatchlistItem key={index} {...item} />
                ))}
            </div>
        </section>
    
    );
}

export default Watchlist;