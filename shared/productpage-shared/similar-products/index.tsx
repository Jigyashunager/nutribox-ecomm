import ProductsSection from '@/shared/homepage-shared/products-section-sliders'
import React, { useState } from 'react'

const SimilarProducts = () => {
    const [value, setValue] = useState()
    const newFunction = () => {

    }
  return (
    <div>
        <div>
            <ProductsSection heading='SIMILAR PRODUCTS' handleButtonClick={newFunction} handleSideCart={newFunction} />
        </div> 
    </div>
  )
}

export default SimilarProducts