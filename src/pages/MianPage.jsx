import { useEffect, useState } from "react";
import api from "../assets/api/api";
import SingleProduct from "../components/SingleProduct";
import { useQuery } from "@tanstack/react-query";
import useGetProducts from "../hooks/useGetProducts";

export default function MainPage() {
  const { data: products, isLoading, isError, error } = useGetProducts();

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {products?.data?.map((item) => (
          <SingleProduct
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}
