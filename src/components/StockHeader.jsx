import * as React from "react";

function StockHeader() {
  return (
    <div className="flex flex-col items-start px-9 pt-7 pb-36 mx-auto w-full border border-solid bg-stone-950 border-white border-opacity-10 rounded-[30px] max-md:px-5 max-md:pb-24 max-md:mt-2.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start self-stretch w-full max-md:max-w-full">
        <div className="flex flex-auto gap-5 items-start mt-1.5 text-xs font-medium text-white max-md:max-w-full">
          <div className="self-stretch text-3xl font-bold basis-auto">
            Apple Inc. (AAPL)
          </div>
          <div className="px-3.5 pt-1 pb-2.5 mt-2.5 whitespace-nowrap rounded-md bg-neutral-600">
            NSDQ
          </div>
          <div className="px-3 py-1.5 mt-2.5 whitespace-nowrap bg-violet-500 rounded-md">
            Technology
          </div>
        </div>
        <div className="flex gap-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25fa2f6ecb602eea81685a0c720a56cad37431d73acf41f2fae30eb4a4109338?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a161f59e06f98e1bdcbaf44ff45e2e7112dc9a8a40a491b355f7ea8673cef8f?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 items-start mt-4 text-white">
        <div className="text-3xl font-semibold basis-auto">USD 226.34</div>
        <div className="self-stretch text-2xl text-green-400 basis-auto">
          +2.31 (1.03%)
        </div>
        <div className="mt-5 text-xs basis-auto">Last Updated at 3.57 PM</div>
      </div>
      <div className="mt-4 text-sm text-white">Available Qty. 10 Nos</div>

      <div className="mt-4 text-sm text-white">Apple Inc. is an American multinational corporation and 
        technology company headquartered in Cupertino, California, in Silicon Valley. It is best known for 
        its consumer electronics, software, and services</div>

    </div>


  );

}

export default StockHeader;