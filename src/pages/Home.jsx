import React from "react";
import { About } from "../components/Home/About";
import { Banner } from "../components/Home/Banner";
import { Brands } from "../components/Home/Brands";
import { Categories } from "../components/Home/Categories";
import { Clients } from "../components/Home/Clients";
import { Comprehensive } from "../components/Home/Comprehensive";
import { Footer } from "../components/Home/Footer";
import { Form } from "../components/Home/Form";
import { News } from "../components/Home/News";
import { Offers } from "../components/Home/Offers";
import { ProductsWrapper } from "../components/Home/ProductsWrapper";
import { Subscription } from "../components/Home/Subscription";

const Home = () => {
  return (
    <div className="bg-[#f8f7f3] w-full">
      <div className="bg-x-1l-ubo-z relative">
        <Banner />
        <Categories />
        <Comprehensive />
        <Offers />
        <ProductsWrapper />
        <Clients />
        <Brands />

        <Subscription />
        <Footer />
      </div>
    </div>
  );
};
export default Home;