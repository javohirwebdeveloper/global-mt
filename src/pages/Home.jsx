import React from "react";
import { About } from "../components/Home/About";
import { Banner } from "../components/Home/Banner";
import { Brands } from "../components/Home/Brands";
import { Categories } from "../components/Home/Categories";
import { Clients } from "../components/Home/Clients";
import { Comprehensive } from "../components/Home/Comprehensive";
import { Footer } from "../components/Home/Footer";
import { Form } from "../components/Home/Form";
import { Header } from "../components/Home/Header";
import { News } from "../components/Home/News";
import { Offers } from "../components/Home/Offers";
import { ProductsWrapper } from "../components/Home/ProductsWrapper";
import { Subscription } from "../components/Home/Subscription";
import { useSelector, useDispatch } from "react-redux";
import { categories, products } from "../../public/data";
import { addToCart, addToCompare, addToFavorites } from "../redux/actions";
const Home = () => {
  const cart = useSelector((state) => state.cart);
  const compare = useSelector((state) => state.compare);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToCompare = (product) => {
    dispatch(addToCompare(product));
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };
const onClose = () => {
  setIsCategoryOpen(false);
};
return (
  <div className="bg-[#f8f7f3] flex flex-row justify-center w-full">
    <div className="bg-x-1l-ubo-z w-[1440px] h-[8262px] relative">
      <Footer />
      <Form />
      <News />
      <Subscription />
      <Brands />
      <Clients />
      <About />
      <ProductsWrapper />
      <Offers />
      <Comprehensive />
      <Categories />
      <Banner />
      <Header />
    </div>
  </div>
);
};
export default Home;