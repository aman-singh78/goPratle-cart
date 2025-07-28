import { useEffect } from "react";
import { PRODUCT_API_URL } from "../constants/api";

const ProductListPage = () => {
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const data = await fetch(PRODUCT_API_URL);
    const json = await data.json();
    console.log(json);
  };

  return <div>hello</div>;
};

export default ProductListPage;
