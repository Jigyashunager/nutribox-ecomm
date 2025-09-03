import Header from '@/components/homepage-components/main-header'
import React, { useState } from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BannerOne from '@/shared/homepage-shared/bannerOne';
import Image from "next/image";
import Rating from "@mui/material/Rating";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import myCustomData from "@/json-data/data.json";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DropdownComponent from '@/shared/homepage-shared/dropdown';
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import PopupModal from '@/shared/homepage-shared/popup-modal';
import PaginationRounded from '@/shared/productpage-shared/pagination';
import Footer from '@/shared/homepage-shared/footer';
import Link from "next/link";
import SideCart from '@/shared/homepage-shared/sideCart';
import LeftDrawer from '@/components/mobilepage-components/left-header';
import LeftShopContent from '@/shared/left-shop-content';

const Shop = () => {
  const [value, setValue] = useState<number>(2);
  const [num, setNum] = useState<Array<number>>([]);

  const handlewWishList = (productIndex: number) => {
    if (num.indexOf(productIndex) === -1) {
      setNum([...num, productIndex])
    } else {
      const filteredNumbers = num.filter(number => number !== productIndex);
      setNum(filteredNumbers)
    }
  }
  const openSideCart = (product: any) => {
    // handleSideCart(product)
  }
  return (
    <>
      <div className='desktop-shop-page'>
        <div className='page-distribution-heading'>
          <Link href="/"><h6>Homepage</h6> </Link>
          <span><ArrowForwardIosIcon /></span>
          <h5>Shop</h5>
        </div>
        <BannerOne />
        <div className='main-shop-page-content'>
          <LeftShopContent/>
          <div className="right-shop-page-content">
            <div className='right-upper-bar'>
              <div className='upper-bar'>
                <ViewModuleIcon className='layout-icon-one' />
                <FormatListBulletedOutlinedIcon className='layout-icon-two' />
                <DropdownComponent />
              </div>
              <p>Showing 1-12 of 27 results</p>
            </div>
            <div className='right-product-card'>
              {myCustomData?.data.map((product, index) => (
                <div key={product.id} >
                  <div className="product-card">
                    <div className="product-image">
                      <Link href={"/product/product-name"}><Image
                        alt="nutritrix"
                        src={product.image}
                        width={280}
                        height={280}
                        priority
                        className="product-card-image"
                      />
                      </Link>
                      <FavoriteOutlinedIcon
                        onClick={() => { handlewWishList(index) }}
                        className={num.includes(index) ? "wishlist-icon-color" : "wishlist-icon"}
                        width={60}
                        height={60}
                      />
                      <PopupModal product={product} />
                      <div>
                        <h6>Category</h6>
                        <Link href={'/product/product-name'}><h4 className="two-line-text">
                          Optimum Nutrition Gold Standard 100% Whey Proteinn
                        </h4>
                          <div className="stars-rating">
                            <Rating
                              className="stars"
                              name="read-only"
                              value={value}
                              readOnly
                            />
                            <span className="stars-count">(3)</span>
                          </div>
                          <div className="product-price">
                            <h5>$90.00</h5>
                          </div></Link>
                        <button onClick={() => openSideCart(product)} className="hover-up">
                          <span className="add-to-cart" >ADD TO CART</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <PaginationRounded />

          </div>
        </div>
        <SideCart setProduct={""} />
      </div>
      <div className='mobile-shop-page'>

        <div className='page-distribution-heading'>
          <Link href="/"><h6>Homepage</h6> </Link>
          <span><ArrowForwardIosIcon /></span>
          <h5>Shop</h5>
        </div>
        <BannerOne />
        <div className='main-shop-page-content'>

          <div className="right-shop-page-content">
            <div className='right-upper-bar'>
              <div className='upper-bar'>
                <DropdownComponent />
                <LeftDrawer openName="shop" anchor="left"/>
              </div>
              <p>Showing 1-12 of 27 results</p>
            </div>
            <div className='right-product-card'>
              {myCustomData?.data.map((product, index) => (
                <div key={product.id} >
                  <div className="product-card">
                    <div className="product-image">
                      <Link href={"/product/product-name"}><Image
                        alt="nutritrix"
                        src={product.image}
                        width={680}
                        height={680}
                        priority
                        className="product-card-image"
                      />
                      </Link>
                      <FavoriteOutlinedIcon
                        onClick={() => { handlewWishList(index) }}
                        className={num.includes(index) ? "wishlist-icon-color" : "wishlist-icon"}
                        width={60}
                        height={60}
                      />
                      <PopupModal product={product} />
                      <div>
                        <h6>Category</h6>
                        <Link href={'/product/product-name'}><h4 className="two-line-text">
                          Optimum Nutrition Gold Standard 100% Whey Proteinn
                        </h4>
                          <div className="stars-rating">
                            <Rating
                              className="stars"
                              name="read-only"
                              value={value}
                              readOnly
                            />
                            <span className="stars-count">(3)</span>
                          </div>
                          <div className="product-price">
                            <h5>$90.00</h5>
                          </div></Link>
                        <button onClick={() => openSideCart(product)} className="hover-up">
                          <span className="add-to-cart" >ADD TO CART</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        <SideCart setProduct={""} />
      </div>
    </>
  )
}

export default Shop