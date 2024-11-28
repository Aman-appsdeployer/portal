import * as React from "react";

function ValueDisplay() {
  return (
    <div className="flex flex-col grow items-start px-8 pt-8 pb-20 w-full border border-solid bg-stone-950 border-white border-opacity-10 rounded-[30px] max-md:px-5 max-md:mt-2.5">
      <div className="text-2xl font-semibold text-cyan-400">Value</div>
      <div className="mt-9 text-3xl font-light leading-10 text-black">
        <span className="text-base leading-5 text-white">AED</span>
        <br />
        <span className="text-4xl font-medium leading-10 text-white">
          226.34
        </span>
      </div>
      <div className="mt-8 text-base text-white">Remaining funds: $9,700</div>
      
    </div>
  );
}

export default ValueDisplay;