import { useNavigate } from "react-router-dom";

export default function SingleProduct({ image, title, price, id }) {
  const navigateToSinglePage = useNavigate();
  return (
    <>
      <div
        onClick={() => navigateToSinglePage(`/product/${id}`)}
        className="ring ring-sky-900/30 rounded-[1.3rem] overflow-hidden p-[1rem] mx-[0.5rem] cursor-pointer"
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
    </>
  );
}
