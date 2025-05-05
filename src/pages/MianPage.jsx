import { useCallback, useEffect, useRef, useState } from "react";
import api from "../api/api";
import SingleProduct from "../components/SingleProduct";
import { useQuery } from "@tanstack/react-query";
import useGetProducts from "../hooks/useGetProducts";
import Loader from "../components/Loader";
import ErrorModal from "../components/ErrorModal";
import Category from "../components/Category";

export default function MainPage() {
  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetProducts();

  const searchRef = useRef(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchHandler = useCallback(() => {
    const searchVal = searchRef.current.value;
    setFilteredProducts(
      products?.data?.filter(
        (item) =>
          item.title.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.price.toString().includes(searchVal.toString())
      )
    );
  }, [products]);

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

        <Category products={products?.data} />
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
