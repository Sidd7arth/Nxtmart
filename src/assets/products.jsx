import React, { useState } from "react";
import { useCart } from "../CartContext"; 

const ProductCard = ({ id, image, title, price, weight }) => {
  const [count, setCount] = useState(0);

  const { handleIncrease, handleDecrease, addToCart } = useCart();

  const handleAdd = () => {
    setCount(1);
    addToCart({ id, title, price, image, weight }); 
  };

  const increase = () => {
    setCount((prev) => prev + 1);
    handleIncrease(); 
  };

  const decrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      handleDecrease(); 
    } else {
      setCount(0);
    }
  };

  return (
    <div className="rounded-lg p-2 shadow w-72 flex flex-col items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 h-set">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover  transition-transform duration-300 group-hover:scale-105 p-3"
      />
      <h3 className="text-lg font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{weight}</p>
      <p className="text-md font-bold absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full shadow-md">
        {price}
      </p>

      <div className="mt-4">
        {count === 0 ? (
          <button
            type="button"
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center border rounded-lg">
            <button
              onClick={decrease}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-lg border"
            >
              −
            </button>
            <span className="px-4">{count}</span>
            <button
              onClick={increase}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-lg border"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;