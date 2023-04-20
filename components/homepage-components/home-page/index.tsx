import Banner from "@/shared/homepage-shared/banner";
import Categories from "@/shared/homepage-shared/goals-homepage";
import PopularCategories from "@/shared/homepage-shared/popular-categories";
import React, { useState, useEffect } from "react";
import Header from "../main-header";
import ProductsSection from "@/shared/homepage-shared/products-section-sliders";
import Brands from "@/shared/homepage-shared/brands";
import WhyNutritrix from "@/shared/homepage-shared/whynutritrix";
import BundlePack from "@/shared/homepage-shared/bundle-pack";
import BlogSlider from "@/shared/homepage-shared/blogs-slider";
import Footer from "@/shared/homepage-shared/footer";
import SideCart from "@/shared/homepage-shared/sideCart";

const Homepage = () => {
  const [name, setName] = useState("");

  const showDropdown = (e: any) => {
    setName(e.target.innerHTML);
  };
  const hideDropdown = (e: any) => {
    setName("");
  };

  const [wishlistCount, setWishlistCount] = useState<string>("")
  const [sideCartState, setSideCartState] = useState<any>("")

  const handleButtonClick = (value:any) => {
    setWishlistCount(value)
  };

  const handleSideCart = (value:any) => {
    setSideCartState({...sideCartState, value})
  }

  return (
    <>
      <Header wishlistCount={wishlistCount} />
      <Categories/>
      <SideCart setProduct={sideCartState}/>
      <PopularCategories/>
      <ProductsSection handleSideCart={handleSideCart} handleButtonClick={handleButtonClick} heading="TRENDING NOW"/>
      <Banner/>
      <BundlePack/> 
      <ProductsSection handleSideCart={handleSideCart} handleButtonClick={handleButtonClick} heading="VITAMINS & MINERALS"/>
      <ProductsSection handleSideCart={handleSideCart} handleButtonClick={handleButtonClick} heading="RECOVERY & REPAIR"/>
      <ProductsSection handleSideCart={handleSideCart} handleButtonClick={handleButtonClick} heading="ENERGY & ENDURANCE"/>
      <ProductsSection handleSideCart={handleSideCart} handleButtonClick={handleButtonClick} heading="WORKOUT ESSENTIALS"/>
      <Brands/>
      <WhyNutritrix/>
      <BlogSlider/>
      <Footer/>      
    </>
  );
};

export default Homepage;
