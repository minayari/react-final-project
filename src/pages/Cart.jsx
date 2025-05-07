import { useState } from "react";
import useGetCartProducts from "../hooks/useGetCartProducts";
import SingleProduct from "../components/SingleProduct";

export default function Cart() {
  const storedCarts = JSON.parse(localStorage.getItem("cartItems"));
  storedCarts.map((item) => {
    const {
      data: cartProducts,
      isLoading,
      isError,
      error,
    } = useGetCartProducts(item.id);
  });

  return (
    <div>
      <h1>cart page</h1>
    </div>
  );
}
