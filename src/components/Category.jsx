import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Category({ products }) {
  //   const [categorized, setCategorized] = useState([]);
  const navigateToCategoryPage = useNavigate();

  const handelCategory = useCallback(
    (category) => {
      const categorized = products.filter((pro) => pro.category === category);
      navigateToCategoryPage("/product/category", { state: { categorized } });
    },
    [products]
  );

  return (
    <div className="grid grid-cols-2 gap-10 h-[15rem]">
      <div
        className=" text-center m-[0.5rem] border-[2px] border-solid border-cyan-800 rounded-[1rem] hover:bg-cyan-800 hover:text-white hover:cursor-pointer "
        data-category="men's clothing"
        onClick={(evt) => handelCategory(evt.currentTarget.dataset.category)}
      >
        Men's Clothes
      </div>
      <div
        className=" text-center m-[0.5rem] border-[2px] border-solid border-cyan-800 rounded-[1rem] hover:bg-cyan-800 hover:text-white hover:cursor-pointer "
        data-category="women's clothing"
        onClick={(evt) => handelCategory(evt.currentTarget.dataset.category)}
      >
        Women's Clothes
      </div>
      <div
        className=" text-center m-[0.5rem] border-[2px] border-solid border-cyan-800 rounded-[1rem] hover:bg-cyan-800 hover:text-white hover:cursor-pointer "
        data-category="jewelery"
        onClick={(evt) => handelCategory(evt.currentTarget.dataset.category)}
      >
        Accessories
      </div>
      <div
        className=" text-center m-[0.5rem] border-[2px] border-solid border-cyan-800 rounded-[1rem] hover:bg-cyan-800 hover:text-white hover:cursor-pointer "
        data-category="electronics"
        onClick={(evt) => handelCategory(evt.currentTarget.dataset.category)}
      >
        Electronics
      </div>
    </div>
  );
}
