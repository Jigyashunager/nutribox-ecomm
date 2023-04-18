import Banner from "@/shared/banner";
import Categories from "@/shared/goals-homepage";
import PopularCategories from "@/shared/popular-categories";
import React, { useState, useEffect } from "react";
import Header from "../main-header";
import ProductsSection from "../../shared/products-section-sliders";
import Brands from "@/shared/brands";
import WhyNutritrix from "@/shared/whynutritrix";
import BundlePack from "@/shared/bundle-pack";
import BlogSlider from "@/shared/blogs-slider";
import Footer from "@/shared/footer";

const Homepage = () => {
  const [wishlistCount, setWishlistCount] = useState<string>("")
  const handleButtonClick = (value:any) => {
    // Do something
    setWishlistCount(value)
  };

  return (
    <>
      <Header wishlistCount={wishlistCount} />
      <Categories/>
      <PopularCategories/>
      <ProductsSection handleButtonClick={handleButtonClick} heading="TRENDING NOW"/>
      <Banner/>
      <BundlePack/> 
      <ProductsSection handleButtonClick={handleButtonClick} heading="VITAMINS & MINERALS"/>
      <ProductsSection handleButtonClick={handleButtonClick} heading="RECOVERY & REPAIR"/>
      <ProductsSection handleButtonClick={handleButtonClick} heading="ENERGY & ENDURANCE"/>
      <ProductsSection handleButtonClick={handleButtonClick} heading="WORKOUT ESSENTIALS"/>
      <Brands/>
      <WhyNutritrix/>
      <BlogSlider/>
      <Footer/>
    </>
  );
};

export default Homepage;
