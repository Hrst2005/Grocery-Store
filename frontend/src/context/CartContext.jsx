import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const updateCart = (product, action) => {
    setOrders(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (action === "add") {
        if (existing) {
          return prev.map(item =>
            item.id === product.id
              ? { ...item, qty: item.qty + 1 }
              : item
          );
        }
        return [...prev, { ...product, qty: 1 }];
      }

      if (action === "remove") {
        if (!existing) return prev;

        if (existing.qty === 1) {
          return prev.filter(item => item.id !== product.id);
        }

        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      }

      return prev;
    });
  };

  return (
    <CartContext.Provider value={{ orders, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

// custom hook
export const useCart = () => useContext(CartContext);