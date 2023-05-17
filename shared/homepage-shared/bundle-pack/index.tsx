import React, {useState} from 'react'
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuantityBox from '../quantity-box';


const BundlePack = () => {

    const [bundleTotalOne, setBundleTotalOne] = useState<any>()
    const [bundleTotalTwo, setBundleTotalTwo] = useState<any>()

    const handleBundleTotalOne = (value:any) => {
        setBundleTotalOne(value)
    };
    const handleBundleTotalTwo = (value:any) => {
        setBundleTotalTwo(value)
    };
  
    return (
        <div className='desktop-bundle'>
        <div className='main-bundle-content'>
        <div className='main-bundle-image'>
             <Image
                  alt="nutritrix"
                  src="/bundle.png"
                  width={450}
                  height={420}
                  priority
                  className='product-card-image'
                />
        </div>
        <div className='bundle-offer-image'>
            <Image
                  alt="nutritrix"
                  src="/offer30.png"
                  width={100}
                  height={100}
                  priority
                />
        </div>
        <div className='main-content-bundle'>
            <div className="bundle-heading">
            <h2>BUNDLE & SAVER PACK</h2>
            <span>
                <ArrowForwardIosIcon width={60} height={60} />
            </span>
            </div>
            <h5>Buy this bundle and get the discount. Hurry up!</h5>
            <div className='bundle-products'>
                <div className='bundle-product'>
                    <Image
                        alt="nutritrix"
                        src="/fusionPC.jpg"
                        width={60}
                        height={60}
                        priority
                        className='product-card-image'
                    />
                    <h4> Optimum Nutrition Gold Standard 100% Whey Protein </h4>
                      <div>
                        <QuantityBox handleBundleTotal={handleBundleTotalOne} price={"30.00"}/>
                    </div>
                </div>
                <div className='bundle-product'>
                    <Image
                        alt="nutritrix"
                        src="/goldPC.jpg"
                        width={60}
                        height={60}
                        priority
                        className='product-card-image'
                    />
                    <h4> Essential Amin.o. Energy + Uc-ii Collagen </h4>
                    <div>
                        <QuantityBox handleBundleTotal={handleBundleTotalTwo} price={"20.00"}/>
                    </div>
                </div>

            </div>
            <div className='bundle-price'>
            Bundle price: <span>${(bundleTotalOne*30+bundleTotalTwo*20)}</span>
            </div>
            <button className='bundle-add-to'>ADD TO CART</button>
        </div>
        </div>
        <div>
        </div>
        </div>
    )
}

export default BundlePack;
