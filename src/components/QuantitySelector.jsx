import * as React from "react";

function QuantitySelector() {
  return (
    <div className="flex flex-col items-start pt-7 pr-14 pb-20 pl-7 mx-auto w-full text-white border border-solid bg-stone-950 border-white border-opacity-10 rounded-[30px] max-md:px-5 max-md:mt-2.5">
      <div className="text-2xl font-semibold text-cyan-400">Quantity</div>
      <div className="flex gap-2 justify-between items-start mt-10 max-w-full text-4xl whitespace-nowrap w-[147px]">
        <button
          className="flex items-center justify-center"
          aria-label="Decrease quantity"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c20e562034ac2c94af2715dbc99e0c81e092b1f1377b5e4ba56335831d51fc?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
            alt=""
            className="object-contain shrink-0 mt-2.5 rounded-sm aspect-[0.47] w-[18px]"
          />
        </button>
        <div role="spinbutton" aria-valuenow="1" tabIndex="0">1</div>
        <button
          className="flex items-center justify-center"
          aria-label="Increase quantity"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa88ec1097549f3b876c2a6edbb16787fdcaf776d3a1e35519b1e116b47cbc91?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
            alt=""
            className="object-contain shrink-0 mt-2.5 rounded-sm aspect-[0.47] w-[18px]"
          />
        </button>
      </div>
      <div className="mt-9 text-base">Remaining quantity: 9 Nos</div>

      <button
        className="mt-12  py-2 px-6 ml-28  bg-green-500 text-white font-semibold text-lg rounded-[10px] "
        aria-label="Buy now"
      >
        Buy
      </button>
    </div>
  );
}

export default QuantitySelector;
