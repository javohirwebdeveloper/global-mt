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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:category" element={<CatalogPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
