<<<<<<< HEAD
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

=======
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import ProductDetail from './components/Products/ProductDetail';
import ProductList from './components/Home/ProductList';
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import Footer from './components/Home/Footer';
import ProductsPage from './components/Products/ProductsPage';
import Contact from './components/Contact/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6600',
    },
  },
});

// Hero'yu koşullu olarak göstermek için yeni bir bileşen
const AppContent = () => {
  const location = useLocation();
  const showHero = location.pathname === '/';

  return (
    <>
      <Navbar />
      {showHero && <Hero />}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

>>>>>>> 7f0f898 (İkinci commit)
export default App;
