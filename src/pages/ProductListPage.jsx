import { useEffect } from "react";
import { PRODUCT_API_URL } from "../constants/api";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.items);
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const data = await fetch(PRODUCT_API_URL);
    const json = await data.json();
    dispatch(setProducts(json.products));
  };

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
