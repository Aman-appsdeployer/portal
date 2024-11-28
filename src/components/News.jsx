import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { NewsCard } from './NewsCard';

function News(props) {
    const { isDarkMode, toggleTheme,theme } = useTheme();
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

    return (
        <section
            className={`flex flex-col self-center px-2.5 pt-3.5 pb-3.5 mt-2.5 w-full border border-solid ${theme.border} ${theme.container} border-opacity-1 max-w-[1863px] rounded-[50px] max-md:pb-24 max-md:max-w-full`}
        >
            <h2 className={`self-start ml-10 text-3xl font-medium ${theme.text} max-md:ml-2.5`}>Top news</h2>
            <hr className={`shrink-0 mt-5 h-px border border-solid ${theme.border}  max-md:mt-5 max-md:max-w-full`} />
            <div className="mt-5 mb-0 w-full max-md:mt-10 p-3 max-md:mb-2.5 max-md:max-w-full">
                <div className="grid grid-cols-3 gap-6">
                    {newsData.map((news, index) => (
                        <NewsCard key={index} {...news} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News;