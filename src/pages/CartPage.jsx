import { useMemo, useState } from "react";
import useGetCartProducts from "../hooks/useGetCartProducts";
import SingleProduct from "../components/SingleProduct";
import useCart from "../hooks/useCart";
import Loader from "../components/Loader";
import ErrorModal from "../components/ErrorModal";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function Cart() {
  const { products, addProduct, decreaseProduct } = useCart();

  const localProductsIDs = products.map((item) => item.id);
  const { data, isLoading, isError, refetch } =
    useGetCartProducts(localProductsIDs);

  const mergedProducts = useMemo(() => {
    return data?.map((apiProducts) => {
      const productData = apiProducts.data;
      const cartItem = products.find((pro) => pro.id === productData?.id);

      return {
        ...productData,
        quantity: cartItem?.quantity || 0,
      };
    });
  }, [data, products]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorModal open={isError} onClose={refetch} />;
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      {mergedProducts?.length === 0 ? (
        <div className="flex flex-col justify-center item-center">
          <div className="mx-auto w-[30rem] h-[5rem] ring ring-cyan-800/70 rounded-[1rem] p-[1rem]">
            <h1 className="font-bold text-cyan-800/80 text-center">
              cart is empty
            </h1>
          </div>
        </div>
      ) : (
        mergedProducts?.map((item) => (
          <div
            key={item?.id}
            className="ring ring-cyan-800/50 m-[1rem] p-[1rem] rounded-[1rem] flex flex-col justify-between items-center"
          >
            <div>
              <img
                className="aspect-square object-contain w-full"
                src={item?.image}
                alt="cart product"
              />
              <div className="mt-[0.8rem]">
                <h1 className="font-bold text-cyan-900">{item?.title}</h1>
                <p className="mt-[0.25rem] text-cyan-900/70">${item?.price}</p>
              </div>
            </div>

            <div>
              <IconButton onClick={() => decreaseProduct(item?.id)}>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <span>{item?.quantity}</span>
              <IconButton onClick={() => addProduct(item?.id)}>
                <ControlPointIcon />
              </IconButton>
            </div>
          </div>
        ))
      )}
    </div>
  );

  // <div className="grid grid-cols-4 gap-3">
  //   {queries.map((item) => {
  //     const product = item.data;

  //     return (

  //       <div
  //         key={product.id}
  //         className="ring ring-cyan-800/50 m-[1rem] p-[1rem] rounded-[1rem] flex flex-col justify-between items-center"
  //       >
  //         <div>
  //           <img
  //             className="aspect-square object-contain w-full"
  //             src={product.image}
  //             alt="cart-product"
  //           />
  //           <div className="mt-[0.8rem]">
  //             <h1 className="font-bold text-cyan-900">{product.title}</h1>
  //             <p className="mt-[0.25rem] text-cyan-900/70">
  //               ${product.price}
  //             </p>
  //           </div>
  //         </div>
  //         <div className="w-full flex justify-center items-center">
  //           <IconButton
  //             onClick={() => addProduct(product.id)}
  //             sx={{ ":hover": { color: "primary.main" } }}
  //           >
  //             <ControlPointIcon />
  //           </IconButton>
  //           <div className="mx-[0.5rem]"></div>
  //           <IconButton sx={{ ":hover": { color: "primary.main" } }}>
  //             <RemoveCircleOutlineIcon />
  //           </IconButton>
  //         </div>
  //       </div>
  //     );
  //   })}
  // </div>
  // );
}
