import ProductsSection from '@/shared/homepage-shared/products-section-sliders';
import React from 'react'
import MobileHeader from '../mobile-header';
import MobileMainSlider from '../mobile-main-slider';
import MobileProductsSection from '../mobile-product-slider';

const MainMobilePage = () => {
    const newFunction = () => {

    }
          
  return (
    <div>
        <MobileHeader/> 
        <MobileMainSlider/>
        <MobileProductsSection heading='LATEST-DEALS' handleButtonClick={newFunction} handleSideCart={newFunction}/>
        
    </div>
  )
}

export default MainMobilePage;