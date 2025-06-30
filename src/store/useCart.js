import { create } from "zustand";

const useCart = create((set) => {
  const saved = localStorage.getItem("cartProducts");
  const parsed = saved ? JSON.parse(saved) : [];
  return {
    products: parsed,

    addProduct: (cartID) =>
      set((prev) => {
        const existing = prev.products.find((item) => item.id === cartID);
        if (existing) {
          const newProducts = prev.products.map((item) => {
            if (item.id === cartID) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
          localStorage.setItem("cartProducts", JSON.stringify(newProducts));
          return { products: newProducts };
        } else {
          const newProducts = [...prev.products, { id: cartID, quantity: 1 }];
          localStorage.setItem("cartProducts", JSON.stringify(newProducts));
          return { products: newProducts };
        }
      }),

    decreaseProduct: (cartID) =>
      set((prev) => {
        const existing = prev.products.find((item) => item.id === cartID);
        if (!existing) return;

        const updatedProducts = prev.products.map((item) => {
          if (item.id === cartID) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });

        const filteredProducts = updatedProducts.filter(
          (item) => item.quantity > 0
        );

        localStorage.setItem("cartProducts", JSON.stringify(filteredProducts));
        return { products: filteredProducts };
      }),
  };
});

export default useCart;
