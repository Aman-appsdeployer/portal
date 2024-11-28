import * as React from "react";
import { useTheme } from "../context/ThemeContext";

export function NewsCard({ image, title, description }) {
  const { theme } = useTheme();  // Access theme context

  return (
    <article className={`grow px-8 py-6 w-full ${theme.card} rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full`}>
      <div className="flex gap-2 max-md:flex-col">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="object-contain grow shrink-0 max-w-full rounded-xl aspect-[0.98] w-[216px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <div className={`flex flex-col self-stretch my-auto ${theme.text} max-md:mt-10`}>
            <h2 className="self-start text-4xl font-medium tracking-wide">{title}</h2>
            <p className="mt-3 text-sm tracking-wide">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
