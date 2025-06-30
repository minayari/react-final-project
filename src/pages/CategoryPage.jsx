import { useLocation } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import { useCallback, useEffect, useState } from "react";

export default function CategoryPage() {
  const location = useLocation();
  const { categorized, category } = location.state || [];
  const categoryImages = {
    "men's clothing": ["./img/mensImg1.jpg", "./img/mensImg2.jpg"],
    "women's clothing": ["./img/womensImg1.jpg", "./img/womensImg2.jpg"],
    jewelery: ["./img/jweleryImg1.jpg", "./img/jweleryImg2.jpg"],
    electronics: ["./img/electronicsImg1.jpg", "./img/electronicsImg2.jpg"],
  };
  const images = categoryImages[category] || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  // switch (category) {
  //   case "men's clothing":
  //     imgSrc = "./img/mens.jpg";
  //     break;

  //   case "women's clothing":
  //     imgSrc = "./img/womens.jpg";
  //     break;

  //   case "jewelery":
  //     imgSrc = "./img/accessories.jpg";
  //     break;

  //   case "electronics":
  //     imgSrc = "./img/electronics.jpg";
  //     break;
  // }

  return (
    <>
      <div className="w-full h-screen relative">
        <div
          className="w-full h-full bg-cover bg-center transition-all duratiob-700"
          style={{
            backgroundImage: `url(${images[index]})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute bottom-0 text-[1.5rem] text-white px-4 py-2 rounded-xl text-lg">
          {category.toUpperCase()}
        </div>
      </div>

      <div className="mx-[5rem] my-[5rem]">
        <div className="grid grid-cols-3 gap-6 main-products-resp">
          {categorized ? (
            categorized.map((item) => (
              <SingleProduct
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            ))
          ) : (
            <h1>No matching product</h1>
          )}
        </div>
      </div>
    </>
  );
}
