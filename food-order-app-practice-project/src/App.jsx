import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CartContext";
import { ProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <CartContextProvider>
      <ProgressContextProvider>
      <Header />
      <Meals />
      <Cart />
      </ProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
