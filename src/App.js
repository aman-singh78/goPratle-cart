import { Provider } from "react-redux";
import ProductListPage from "./pages/ProductListPage";
import appStore from "./redux/store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <ProductListPage />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
