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
import CheckoutPage from './components/Checkout/CheckoutPage';
import OrderSuccess from './components/Checkout/OrderSuccess';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

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
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
