import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Navbar from "./Navbar";
import News from "./News";
import Watchlist from "./Watchlist";

// import { Footer } from "./footer";

const RootLayout = () => {
    const { isDarkMode, toggleTheme, theme } = useTheme();
    return (
        <div className={`${theme.background} `}>
            <Navbar />
            <div className={`pt-32 ${theme.background} flex flex-row `}>
                <aside className={`flex flex-col w-[34%] m-5 max-md:ml-0 max-md:w-full ${theme.background}`}>
                    <Watchlist />
                </aside>
                <aside className={`flex flex-col w-[66%] m-5 max-md:ml-0 max-md:w-full  ${theme.background}`}>
                    <Outlet className={`  `} />
                </aside>
            </div>
            <News/>
            {/* <Footer /> */}
        </div>
    );
};

export default RootLayout;

