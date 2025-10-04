import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
  setCheckoutSuccess,
} from "../utils/cartSlice";

const Cart = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { items, checkoutSuccess } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:5000" + "/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.id,
            quantity: i.quantity,
          })),
        }),
      });
      if (!res.ok) throw new Error("Checkout failed");
      const data = await res.json();
      dispatch(clearCart());
      dispatch(setCheckoutSuccess(true));
      setTimeout(() => {
        dispatch(setCheckoutSuccess(false));
        onClose();
      }, 2000);
      console.log("Checkout response:", data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-30 flex items-center justify-center transition ${
        open ? "visible" : "invisible"
      }`}
      style={{
        background: open ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
        pointerEvents: open ? "auto" : "none",
      }}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-blue-100 rounded-lg shadow-lg w-full max-w-md mx-2 transform transition-all duration-300 ${
          open
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-xl font-bold text-center">Your Cart</h2>
          <button
            className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>
        <div className="p-6 max-h-96 overflow-y-auto">
          {checkoutSuccess ? (
            <div className="text-green-600 text-center font-semibold py-8">
              Checkout successful! ✅
            </div>
          ) : items.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              Your cart is empty.
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-14 h-14 object-cover bg-gray-100 rounded"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-gray-500 text-sm">
                      ₹{item.price.toFixed(2)} x {item.quantity} = ₹
                      {(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="flex items-center mt-1">
                      <button
                        className="px-2 py-0.5 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                        onClick={() => dispatch(decrementQty(item.id))}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="px-2 py-0.5 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                        onClick={() => dispatch(incrementQty(item.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="ml-2 text-2xl text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && !checkoutSuccess && (
          <div className="border-t px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="text-lg font-bold">₹{total.toFixed(2)}</span>
            </div>
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition disabled:opacity-60 cursor-pointer"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? "Processing..." : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
