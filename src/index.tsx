import ReactDOM from 'react-dom/client'
import "./tailwind.css";
import App from "./App";
import React from 'react';
import CartProvider from "./context/CartContext";

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
      <CartProvider>
          <App />
      </CartProvider>
  </React.StrictMode>
)


