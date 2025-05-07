import { useState } from "react";
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
  const { products } = useCart();
  const productIDs = products.map((item) => item.id);
  const queries = useGetCartProducts(productIDs);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);

  useEffect(() => {
    const loading = queries.some((query) => query.isLoading);
    const error = queries.some((query) => query.isError);
    setOpenErrorModal(error);

    setIsLoading(loading);
    setIsError(error);
  }, [queries]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorModal
        open={openErrorModal}
        onClose={() => setOpenErrorModal(false)}
      />
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      {queries.map((item) => {
        const product = item.data;
        return (
          <div
            key={product.id}
            className="ring ring-cyan-800/50 m-[1rem] p-[1rem] rounded-[1rem] flex flex-col justify-between items-center"
          >
            <div>
              <img
                className="aspect-square object-contain w-full"
                src={product.image}
                alt="cart-product"
              />
              <div className="mt-[0.8rem]">
                <h1 className="font-bold text-cyan-900">{product.title}</h1>
                <p className="mt-[0.25rem] text-cyan-900/70">
                  ${product.price}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <IconButton sx={{ ":hover": { color: "primary.main" } }}>
                <ControlPointIcon />
              </IconButton>
              <span className="mx-[0.5rem]">1</span>
              <IconButton sx={{ ":hover": { color: "primary.main" } }}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
