import { useCallback, useEffect, useRef, useState } from "react";
import api from "../api/api";
import SingleProduct from "../components/SingleProduct";
import { useQuery } from "@tanstack/react-query";
import useGetProducts from "../hooks/useGetProducts";
import Loader from "../components/Loader";
import ErrorModal from "../components/ErrorModal";

export default function MainPage() {
  const { data: products, isLoading, isError, error, refetch } = useGetProducts();
  // const [searchProduct, setSearchProducts] = useState("");
  const searchRef = useRef(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //Doesn't work in UseMemo
  // const filteredProducts = products?.data?.filter(
  //   (item) =>
  //     item.title.toLowerCase().includes(searchProduct.toLowerCase()) ||
  //     item.price.toString().includes(searchProduct.toString())
  // );

  function searchHandler() {
    const searchVal = searchRef.current.value;
    setFilteredProducts(
      products?.data?.filter(
        (item) =>
          item.title.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.price.toString().includes(searchVal.toString())
      )
    );
  }

  return (
    <>
      <div>
        <div className="flex justify-center items-center mb-[2rem]">
          <input
            placeholder="search name or price"
            // value={searchProduct}
            ref={searchRef}
            onChange={searchHandler}
            type="text"
            className="w-[20rem] border-[2px] border-solid border-cyan-800 rounded-[0.5rem] focus: outline-none p-[0.15rem]"
          />
        </div>
        <div>
          <button data-category="accessories">Accessories</button>
          <button data-category="clothes">Clothes</button>
          <button data-category="electronics">Electronics</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {isLoading && <Loader />}
        {!isLoading &&
          products &&
          filteredProducts.length === 0 &&
          products?.data?.map((item) => (
            <SingleProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        {!isLoading &&
          products &&
          filteredProducts.length > 0 &&
          filteredProducts?.map((item) => (
            <SingleProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}

        <ErrorModal
          open={isError}
          onClose={() => {
            refetch();
          }}
        />
      </div>
    </>
  );
}
