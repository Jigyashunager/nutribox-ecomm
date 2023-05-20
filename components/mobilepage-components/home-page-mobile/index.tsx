import ProductsSection from '@/shared/homepage-shared/products-section-sliders';
import React from 'react'
import MobileHeader from '../mobile-header';
import MobileMainSlider from '../mobile-main-slider';
import MobileProductsSection from '../mobile-product-slider';
import Goals from '@/shared/homepage-shared/goals-homepage';
import MobileGoals from '../mobile-goals';
import AdBannerMobile from '../ad-banner-mobile';
import AdBannerTwoMobile from '../ad-banner-two-mobile';
import SingleAdBanner from '../single-ad-banner';
import MobileBrands from '../brands-mobile';
import WhyNutritrixMobile from '../why-nutritrix-mobile';
import PromotersFooter from '../promoters-footer';

const MainMobilePage = () => {
    const newFunction = () => {

    }
          
  return (
    <div>
        <MobileMainSlider/>
        <MobileProductsSection heading='LATEST-DEALS' handleButtonClick={newFunction} handleSideCart={newFunction}/>
        <MobileGoals/>
        <MobileProductsSection heading='TRENDING-NOW' handleButtonClick={newFunction} handleSideCart={newFunction}/>
        <AdBannerMobile/>
        <MobileProductsSection heading='PRICE SLASH' handleButtonClick={newFunction} handleSideCart={newFunction}/>
        <AdBannerTwoMobile/>
        <MobileProductsSection heading='VITAMIN & MINERALS' handleButtonClick={newFunction} handleSideCart={newFunction}/>
        <SingleAdBanner image={'/single-ad.jpg'}/>
        <MobileProductsSection heading='ENERGY & ENDURANCE' handleButtonClick={newFunction} handleSideCart={newFunction}/>
        <SingleAdBanner image={'/single-girl-ad.jpg'}/>
        <MobileProductsSection heading='BUDGET COMBOS' handleButtonClick={newFunction} handleSideCart={newFunction}/>
        <MobileBrands/>
        <WhyNutritrixMobile/>
        <PromotersFooter/>
    </div>
  )
}

export default MainMobilePage;