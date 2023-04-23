import Banner from "@/shared/homepage-shared/bannerOne";
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
import Slider from "@/shared/homepage-shared/slider";
import BannerOne from "@/shared/homepage-shared/bannerOne";
import LatestDeals from "@/shared/homepage-shared/latest-deals";
import BannerTwo from "@/shared/homepage-shared/bannerTwo";

const Homepage = () => {
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
      <Header wishlistCount={wishlistCount}/>  
      <Slider value="" />
      <Categories/>
      <SideCart setProduct={sideCartState}/>
      <PopularCategories/>
      <ProductsSection handleSideCart={handleSideCart} handleButtonClick={handleButtonClick} heading="TRENDING NOW"/>
      <BannerOne/>
      <LatestDeals/>
      <BannerTwo/>
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
