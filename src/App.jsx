import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import ProductList from "./components/Home/ProductList";
import Footer from "./components/Home/Footer";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Hero />
        <ProductList />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
