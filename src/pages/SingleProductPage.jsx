import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { useEffect } from "react";

export default function SingleProductPage() {
  const { productID } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetSingleProduct(productID);

  if (isError) {
    return <h1>${error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="w-[25rem] mx-auto my-[3rem] ring-2 ring-sky-900/30 p-[1.6rem] rounded-[1.5rem]">
        <img
          className="w-full h-[20rem] object-contain"
          src={product?.data?.image}
          alt="single-product"
        />
        <div className="mt-[1.3rem]">
          <h2 className="font-bold text-cyan-900">{product?.data.title}</h2>
          <p className="text-cyan-900/60">${product?.data.price}</p>
        </div>
      </div>
    </>
  );
}
