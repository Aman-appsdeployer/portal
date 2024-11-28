import * as React from "react";
import { useTheme } from "../context/ThemeContext";

function WatchlistItem({
  name = "BRITANNIA",
  exchange = "NSE",
  fullName = "Britannia Industries Ltd",
  chartImage = "https://cdn.builder.io/api/v1/image/assets/4e75ac1c40a44247a35142d4bb93ea14/3b3caa4ba027c6fd53a74ce496c7666bd2f9e1f98a1887ff12f9c7a00d184911?apiKey=4e75ac1c40a44247a35142d4bb93ea14&",
  price = "USD 5,741.85",
  change = "+82.7",
  percentChange = "1.46"
}) {
  const { isDarkMode, theme } = useTheme();  // Access theme context

  return (
    <article className={`flex flex-col md:flex-row gap-2 justify-between items-center w-full max-w-3xl mx-auto px-2 sm:px-3 xl:px-1 pt-1 pb-1 mt-1 xl:mt-1 rounded-xl ${theme.card}`}>
      <section className={`flex flex-col ${theme.text} w-full lg:w-auto`}>
        <div className="flex gap-2.5 items-center justify-center lg:justify-start">
          <h2 className={`text-sm font-bold ${theme.text}`}>{name}</h2>
          <span
            className="px-1.5 py-0.5 text-xs font-semibold whitespace-nowrap rounded-sm bg-neutral-400"
            role="text"
            aria-label={`Listed on ${exchange}`}
          >
            {exchange}
          </span>
        </div>
        <p className={`mt-2.5 text-xs text-center lg:text-left ${theme.text}`}>{fullName}</p>
      </section>

      <figure className="w-full flex justify-center">
        <img
          loading="lazy"
          src={chartImage}
          alt={`Stock price chart for ${fullName}`}
          className="object-contain h-auto w-full max-w-[6rem] aspect-[3.2]"
        />
      </figure>

      <section className={`flex flex-col text-xs w-full items-center lg:items-end`}>
        <p
          className={`font-medium ${change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
          role="text"
          aria-label={`Current price ${price}`}
        >
          {price}
        </p>
        <p className={`mt-3 lg:mt-5 ${theme.text}`} role="text" aria-label={`Price change ${change} (${percentChange}%)`}>
          {change} ({percentChange}%)
        </p>
      </section>
    </article>
  );
}

export default WatchlistItem;
