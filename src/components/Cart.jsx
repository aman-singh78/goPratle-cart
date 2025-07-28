import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="fixed top-4 right-4 bg-blue-100 text-blue-800 px-4 py-2 rounded shadow">
      🛒 Cart: {cartItems.length}
    </div>
  );
};

export default Cart;
