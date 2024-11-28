import * as React from "react";

function BuyButton({ quantity, price }) {
  const handleBuy = () => {
    const totalValue = quantity * price;
    console.log(`Buying ${quantity} shares at $${price} for total $${totalValue}`);
  };

  return (
    <button
      onClick={handleBuy}
      className="w-full mt-4 px-8 py-4 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label={`Buy ${quantity} shares`}
    >
      Buy Now
    </button>
  );
}

export default BuyButton;