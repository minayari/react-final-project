import { useEffect, useState } from "react";
import api from "../api/api";
import SingleProduct from "../components/SingleProduct";
import { useQuery } from "@tanstack/react-query";
import useGetProducts from "../hooks/useGetProducts";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

export default function MainPage() {
  const { data: products, isLoading, isError, error } = useGetProducts();

  if (isError) {
    return <Modal message={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex justify-center items-center mb-[2rem]">
        <input
          type="text"
          className="w-[20rem] border-[2px] border-solid border-cyan-800 rounded-[0.5rem] focus: outline-none p-[0.15rem]"
        />
      </div>
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
