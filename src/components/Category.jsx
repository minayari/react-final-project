import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Category({ products }) {
  const navigateToCategoryPage = useNavigate();

  const STYLE =
    "flex-shrink min-x-[100px] basis-1/5 text-center m-[0.5rem] overflow-hidden";

  const handelCategory = useCallback(
    (category) => {
      const categorized = products.filter((pro) => pro.category === category);
      navigateToCategoryPage("/category", { state: { categorized, category } });
    },
    [products]
  );

  return (
    <div className="flex justify-between overflow-hidden categoty">
      <div
        className={STYLE}
        data-category="men's clothing"
        onClick={(evt) => handelCategory(evt.currentTarget.dataset.category)}
      >
        <div>
          <img
            className="w-full h-[80%] object-cover rounded-[1rem] "
            src="./img/mens.jpg"
          />
        </div>
        <h2 className="mt-[0.5rem] text-cyan-800">Men's Collection</h2>
      </div>

      <div
        className={STYLE}
        data-category="women's clothing"
        onClick={(evt) => handelCategory(evt.currentTarget.dataset.category)}
      >
        <div>
          <img
            className="w-full h-[80%] rounded-[1rem] object-cover"
            src="./img/womens.jpg"
          />
          <h2 className="mt-[0.5rem] text-cyan-800">Women's Collection</h2>
        </div>
      </div>

      <div
        className={STYLE}
        data-category="jewelery"
        onClick={(evt) => handelCategory(evt.currentTarget.dataset.category)}
      >
        <div>
          <img
            className="w-full h-[80%] rounded-[1rem] object-cover"
            src="./img/accessories.jpg"
          />
          <h2 className="text-cyan-800 mt-[0.5rem]">Accessories</h2>
        </div>
      </div>

      <div
        className={STYLE}
        data-category="electronics"
        onClick={(evt) => handelCategory(evt.currentTarget.dataset.category)}
      >
        <div>
          <img
            className="w-full h-[80%] rounded-[1rem] object-cover"
            src="./img/electronics.jpg"
          />
        </div>
        <h2 className="text-cyan-800 mt-[0.5rem]">Electronics</h2>
      </div>
    </div>
  );
}
