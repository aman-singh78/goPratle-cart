import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { title, thumbnail, price, description } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border border-gray-200 p-2 rounded-lg ">
      <img
        src={thumbnail}
        alt={title}
        className="h-36 w-full object-cover rounded mb-2"
      />
      <h2 className="text-sm font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{description}</p>

      <p className="text-sm text-gray-600 mb-2">₹{price}</p>

      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
