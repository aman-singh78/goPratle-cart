import { Provider } from "react-redux";
import ProductListPage from "./pages/ProductListPage";
import appStore from "./redux/store";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <ProductListPage />
      </div>
    </Provider>
  );
}

export default App;
