import { useEffect, useState } from "react";
import { PRODUCT_API_URL } from "../constants/api";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const ProductListPage = () => {
  const [searchText, setSearchText] = useState("");
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
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
