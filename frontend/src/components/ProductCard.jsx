import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex flex-col border border-white/40 cursor-pointer">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-48 w-full object-contain p-4"
      />
      <div className="flex-1 flex flex-col px-4 pb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h2>
        <div className="text-gray-600 mb-4">₹{product.price.toFixed(2)}</div>
        <button
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition cursor-pointer"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;