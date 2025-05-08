import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import useCart from "../hooks/useCart";
import useGetProducts from "../hooks/useGetProducts";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

export default function SingleProduct({ image, title, price, id }) {
  const navigateToSinglePage = useNavigate();
  const { products: cartProducts, addProduct } = useCart();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const isExist = cartProducts.some((item) => item.id === id);
    setClicked(isExist);
  }, [cartProducts, id]);

  const hanldeClick = () => {
    addProduct(id);
  };

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;
  // const addingCart = useCallback(() => {
  //   const saved = localStorage.getItem("cartItems");
  //   const parsed = saved ? JSON.parse(saved) : [];

  //   const existing = parsed.find((item) => item.id === id);

  //   let updated;

  //   if (existing) {
  //     updated = parsed.map((item) =>
  //       item.id === id ? { id: item.id, quantity: item.quantity + 1 } : item
  //     );
  //   } else {
  //     updated = [...parsed, { id, quantity: 1 }];
  //   }

  //   localStorage.setItem("cartItems", JSON.stringify(updated));
  //   return existing;
  // }, [image, title, price, id]);

  return (
    <>
      <div className=" ring ring-sky-900/30 rounded-[1.3rem] overflow-hidden p-[1rem] mx-[0.5rem] cursor-pointer flex flex-col justify-between items-center h-full">
        <div
          onClick={() => {
            event.stopPropagation();
            navigateToSinglePage(`/product/${id}`);
          }}
        >
          <img
            className="aspect-square object-contain w-full"
            src={image}
            alt="product-img"
          />
          <div className="mt-[0.5rem]">
            <h2 className="text-cyan-900">{title}</h2>
            <p className="text-cyan-900/70">${price}</p>
          </div>
        </div>

        <div
          onClick={hanldeClick}
          style={{
            pointerEvents: clicked ? "none" : "auto",
            userSelect: "none",
          }}
          className={`my-[0.5rem] ${
            clicked
              ? "bg-white text-cyan-800 border-[1px] border-solid border-cyab-800"
              : "bg-cyan-800 text-white"
          }  relative w-35 h-12 overflow-hidden rounded-md group cursor-pointer`}
        >
          <div className="absolute inset-0 flex items-center justify-center transition duration-300 transform group-hover:-translate-y-full">
            {clicked ? "Added to cart" : "Add to cart"}
          </div>

          <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}
