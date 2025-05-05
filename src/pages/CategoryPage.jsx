import { useLocation } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

export default function CategoryPage() {
  const location = useLocation();
  const { categorized } = location.state || [];

  return (
    <div className="grid grid-cols-3 gap-6">
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
  );
}
