import * as React from "react";
import { useTheme } from "../context/ThemeContext";
import QuantitySelector from "./QuantitySelector";
import StockHeader from "./StockHeader";
import ValueDisplay from "./ValueDisplay";

export function StockCard({
  logo,
  name,
  exchange,
  description,
  price,
  change,
  percentChange,
  isPositive
}) {
  const { theme } = useTheme();  // Access theme context

  return (
    <article className={`flex flex-col flex-1 items-center pt-4 pb-4 border border-solid ${theme.card} ${theme.border} rounded-[32px]`}>
      <div className="flex gap-8 items-start justify-center">
        <div className="flex flex-col mt-1">
          <div className="flex flex-col justify-center px-2 py-2 bg-white rounded-xl">
            <img
              loading="lazy"
              src={logo}
              alt={`${name} company logo`}
              className="object-contain w-12 aspect-[3]"
            />
          </div>
          <h3 className={`mt-1 text-base font-medium ${theme.text}`}>{name}</h3>
        </div>
        {exchange && (
          <span className={`object-contain shrink-0 aspect-[0.91] w-[21px] ${theme.text}`}>{exchange}</span>
        )}
      </div>
      <p className={`mt-1 text-base font-light ${theme.text}`}>{price}</p>
      <p
        className={`mt-2 text-base font-bold tracking-normal ${isPositive ? "text-green-400" : "text-red-600"
          }`}
      >
        {change} ({percentChange}%)
      </p>
    </article>
  );
}

export function StockCard2() {
  return (
    <div className="rounded-none">
      <div className="flex max-md:flex-col">
        <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
          <StockHeader />
        </div>
        <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
          <QuantitySelector />
        </div>
        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
          <ValueDisplay />
        </div>

      </div>

    </div>
  );

}

