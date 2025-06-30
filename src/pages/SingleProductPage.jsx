import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { useEffect } from "react";
import Loader from "../components/Loader";
import ErrorModal from "../components/ErrorModal";
import SingleProduct from "../components/SingleProduct";
import useCart from "../store/useCart";
import { useState } from "react";

export default function SingleProductPage() {
  const { productID } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetSingleProduct(productID);

  

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && product && (
        <div className="w-[22rem] mx-auto mt-[5rem]">
          <SingleProduct
            image={product?.data?.image}
            title={product?.data?.title}
            price={product?.data?.price}
            id={product?.data?.id}
          />
        </div>

        // <div className="mx-[8rem] mt-[10rem]">
        //   <div className="w-full max-h-[27rem] ring ring-sky-900/60 box-border p-[2rem] rounded-[1rem] flex items-center">
        //     <div className="w-[17rem]">
        //       <img className="ml-[1rem]" src={product?.data?.image} alt="" />
        //     </div>
        //     <div className="ml-[5rem]">
        //       <h2 className="text-[2rem] text-cyan-900">
        //         {product?.data?.title}
        //       </h2>
        //       <p className="mt-[1rem] text-[1.3rem] text-cyan-900/70">
        //         ${product?.data?.price}
        //       </p>

        //       <div
        //         onClick={hanldeClick}
        //         style={{
        //           pointerEvents: clicked ? "none" : "auto",
        //           userSelect: "none",
        //         }}
        //         className={`my-[0.5rem] singleProducts-btn-resp ${
        //           clicked
        //             ? "bg-white text-cyan-800 border-[1px] border-solid border-cyab-800"
        //             : "bg-cyan-800 text-white"
        //         }  relative w-35 h-12 overflow-hidden rounded-md group cursor-pointer`}
        //       >
        //         <div className="absolute inset-0 flex items-center justify-center transition duration-300 transform group-hover:-translate-y-full">
        //           {clicked ? "Added to cart" : "Add to cart"}
        //         </div>

        //         <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        //           <IconButton className="">
        //             <ShoppingCartIcon />
        //           </IconButton>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}

      <ErrorModal
        open={isError}
        onClose={() => {
          refetch();
        }}
      />
    </>
  );
}
