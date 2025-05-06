import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { useEffect } from "react";
import Loader from "../components/Loader";
import ErrorModal from "../components/ErrorModal";
import SingleProduct from "../components/SingleProduct";

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
        // <div className="w-[25rem] mx-auto my-[3rem] ring-2 ring-sky-900/30 p-[1.6rem] rounded-[1.5rem]">
        //   <img
        //     className="w-full h-[20rem] object-contain"
        //     src={product?.data?.image}
        //     alt="single-product"
        //   />
        //   <div className="mt-[1.3rem]">
        //     <h2 className="font-bold text-cyan-900">{product?.data.title}</h2>
        //     <p className="text-cyan-900/60">${product?.data.price}</p>
        //   </div>
        // </div>
        <div className="w-[22rem] mx-auto ">
          <SingleProduct
            image={product?.data?.image}
            title={product?.data?.title}
            price={product?.data?.price}
            id={product?.data?.id}
          />
        </div>
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
