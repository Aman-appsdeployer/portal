import React from 'react';
import { useTheme } from "../context/ThemeContext";
import ToggleTheme from './Toggle';

function Navbar(props) {
    const { isDarkMode, toggleTheme,theme } = useTheme();
    return (
        <header className={`flex flex-wrap gap-5 justify-between px-20 py-6 w-full max-md:px-5 max-md:max-w-full ${theme.container} fixed`}>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/67219af58a01719234c305dc17967cd729ab39322a50e6fc6d20c435fa403a74?apiKey=4e75ac1c40a44247a35142d4bb93ea14&"
                alt="Company logo"
                className="object-contain shrink-0 max-w-full aspect-[2.75] w-[204px]"
            />
            <nav className="flex gap-10 my-auto max-md:max-w-full">
                <div className={`flex gap-2 items-start my-auto text-2xl ${theme.text} whitespace-nowrap`}>
                    <button className="grow">Invest</button>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/4b490c408760a78c01e202ab67ab30a02de8da7afd063db52bc19558fdc42208?apiKey=4e75ac1c40a44247a35142d4bb93ea14&"
                        alt=""
                        className="object-contain shrink-0 mt-2 rounded-sm aspect-[1.9] w-[38px]"
                    />
                </div>
                <div className={`flex gap-10 self-start text-2xl ${theme.text} max-md:max-w-full`}>
                    <button>Portfolio</button>
                    <button>Order book</button>
                    <button>Search</button>
                </div>
                <div className="flex gap-5 items-start">
                    <button aria-label="Notifications">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/4a531bd60a952f1f1fb7ec07cd2af259af57da23c7e60903d6189eb854955880?apiKey=4e75ac1c40a44247a35142d4bb93ea14&"
                            alt=""
                            className="object-contain shrink-0 aspect-square w-[30px]"
                        />
                    </button>
                    <button aria-label="Messages">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/3c7cf4d75876b10cac10ecb24ff2a54de1ca8dbab9fb0e43b063c769ebbb92fd?apiKey=4e75ac1c40a44247a35142d4bb93ea14&"
                            alt=""
                            className="object-contain shrink-0 aspect-square w-[30px]"
                        />
                    </button>
                    <button aria-label="Profile">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/93332ef1648b0631010c1984c74026b13c63450d4ad4e60c3862d3297eea8252?apiKey=4e75ac1c40a44247a35142d4bb93ea14&"
                            alt=""
                            className="object-contain shrink-0 self-stretch aspect-[1.11] w-[41px]"
                        />
                    </button>
                    <ToggleTheme/>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;