import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CatalogPage from "./pages/CatalogPage";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Loading from "./components/Loading";
import Product from "./pages/Product";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import Header1 from "./components/Home/Header";
import BrandPage from "./pages/BrandPage";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthProvider>
      <div className="bg-[#f8f7f3]">
        <Router>
          <div>
            <Header1 />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Каталог/:category" element={<CatalogPage />} />
              <Route path="/Каталог" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/Личный кабинет" element={<Profile />} />
              <Route path="/О компании" element={<About />} />
              <Route path="/Доставка" element={<Delivery />} />
              <Route path="/Услуги" element={<Services />} />
              <Route path="/Оплата" element={<Payment />} />
              <Route path="/Страница бренда" element={<BrandPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
