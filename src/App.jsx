import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CatalogPage from "./pages/CatalogPage";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Loading from "./components/Loading";

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
    <div className="bg-[#f8f7f3]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/:category" element={<CatalogPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
