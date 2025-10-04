import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header = ({ onCartClick }) => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <header className="bg-blue-600 shadow-2xs sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <button className="text-2xl font-bold text-white cursor-pointer"> GadgetMart</button>
        <button
          className="relative cursor-pointer"
          onClick={onCartClick}
        >
          <ShoppingCartIcon className="h-7 w-7 text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;