import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="bg-blue-200 min-h-screen">
      <Header onCartClick={() => setCartOpen(1)} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <ProductList />
      </main>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default App;