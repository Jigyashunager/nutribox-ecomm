import Header from '@/components/homepage-components/main-header'
import React, { useState } from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BannerOne from '@/shared/homepage-shared/bannerOne';
import SquareIcon from '@mui/icons-material/Square';
import PriceFilter from '@/shared/productpage-shared/priceFilter';
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

const Shop = () => {
  const [value, setValue] = useState<number>(2);
  const [num, setNum] = useState<Array<number>>([]);

  const handlewWishList = (productIndex:number) => {
    if(num.indexOf(productIndex) === -1){
      setNum([...num, productIndex])
    } else {
      const filteredNumbers = num.filter(number => number !== productIndex);
      setNum(filteredNumbers)
    }
  }
  const openSideCart = (product:any) => {
    // handleSideCart(product)
  }
  return (
    <>
      <Header wishlistCount={"2"} />
      <div className='page-distribution-heading'>
        <Link href="/"><h6>Homepage</h6> </Link>
        <span><ArrowForwardIosIcon /></span>
        <h5>Shop</h5>
      </div>
      <BannerOne />
      <div className='main-shop-page-content'>
        <div className='left-shop-page-content'>
          <div className="left-popular-categories">
            <h5>POPULAR CATEGORIES</h5>
            <span className="arrow-span">
              <ArrowForwardIosIcon width={10} height={10} />
            </span>
          </div>
          <div className="left-popular-categories-list">
              <ul>
                <li><SquareIcon className='square-icon'/>Apparel</li>
                <span>(13)</span>
                <li><SquareIcon className='square-icon'/>Body & Fit</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Fat Burnspaners</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Muscle Builders</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Nutrition</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Protein</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Recovery</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Uncategorized</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Wellness</li>
                <span>(1)</span>
              </ul>
          </div>          
          <div className="left-popular-categories">
            <h5>FILTER BY PRICE</h5>
            <span className="arrow-span">
              <ArrowForwardIosIcon width={10} height={10} />
            </span>
          </div>
          <PriceFilter/>
          <div className="left-popular-categories">
            <h5>FILTER BY BRAND</h5>
            <span className="arrow-span">
              <ArrowForwardIosIcon width={10} height={10} />
            </span>
          </div>
          <div className="left-popular-categories-list">
              <ul>
                <li><SquareIcon className='square-icon'/>Energy Gym</li>
                <span>(2)</span>
                <li><SquareIcon className='square-icon'/>Gym Sports</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Healthy</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Power Fitness Club</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>The Fitness Center</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon'/>Victor Gym</li>
                <span>(1)</span>
              </ul>
          </div>   
          <div className="left-popular-categories">
            <h5>BEST SELLER PRODUCTS</h5>
            <span className="arrow-span">
              <ArrowForwardIosIcon width={10} height={10} />
            </span>
          </div>
          <div className="left-popular-categories-list">
          <div className="left-product-card">
              <div className="left-product-image">
                <Link href={'/product'}><Image 
                  alt="nutritrix"
                  src="https://i.ibb.co/x8bNrqy/maxPC.jpg"
                  width={100}
                  height={100}
                  priority
                /></Link>
              </div>
              <div className="left-product-info">
              <Link href={'/product'}><h4 className="left-two-line-text">
                  Optimum Nutrition Gold Standard 100% Whey Proteinn
                </h4>
                <div className="left-stars-rating">
                  <Rating
                    className="stars"
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <span className="left-stars-count">(3)</span>
                </div>
                <div className="left-product-price">
                  <h5>$90.00</h5>
                </div></Link>
              </div>
            </div>
          
          <div className="left-product-card">
              <div className="left-product-image">
                <Link href={'/product'}><Image 
                  alt="nutritrix"
                  src="https://i.ibb.co/Tck0tF8/naturePC.jpg"
                  width={100}
                  height={100}
                  priority
                /></Link>
              </div>
              <div className="left-product-info">
              <Link href={'/product'}><h4 className="left-two-line-text">
                  Optimum Nutrition Gold Standard 100% Whey Proteinn
                </h4>
                <div className="left-stars-rating">
                  <Rating
                    className="stars"
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <span className="left-stars-count">(3)</span>
                </div>
                <div className="left-product-price">
                  <h5>$90.00</h5>
                </div></Link>
              </div>
            </div>
          
          <div className="left-product-card">
              <div className="left-product-image">
                <Link href={'/product'}><Image 
                  alt="nutritrix"
                  src="https://i.ibb.co/0nk9xzt/fusionPC.jpg"
                  width={100}
                  height={100}
                  priority
                /></Link>
              </div>
              <div className="left-product-info">
              <Link href={'/product'}><h4 className="left-two-line-text">
                  Optimum Nutrition Gold Standard 100% Whey Proteinn
                </h4>
                <div className="left-stars-rating">
                  <Rating
                    className="stars"
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <span className="left-stars-count">(3)</span>
                </div>
                <div className="left-product-price">
                  <h5>$90.00</h5>
                </div></Link>
              </div>
            </div>
            <div className="left-popular-categories">
            <h5>FILTER BY TAGS</h5>
            <span className="arrow-span">
              <ArrowForwardIosIcon width={10} height={10} />
            </span>
          </div>
          <div className='tags-flex'>
            <p>Energy</p>
            <p>Fitness</p>
            <p>Healthy</p>
            <p>Nutrition</p>
            <p>Powders</p>
            <p>Protien</p>
            <p>Wellness</p>
          </div>
          </div>   
        </div>
        <div className="right-shop-page-content">
          <div className='right-upper-bar'>
          <div className='upper-bar'>
            <ViewModuleIcon className='layout-icon-one'/>
            <FormatListBulletedOutlinedIcon className='layout-icon-two'/>
            <DropdownComponent/>
          </div>
          <p>Showing 1-12 of 27 results</p>
          </div>
          <div className='right-product-card'>
          {myCustomData?.data.map((product, index) => (
            <div key={product.id} >
            <div className="product-card">
              <div className="product-image">
              <Link href={"/product"}><Image
                  alt="nutritrix"
                  src={product.image}
                  width={280}
                  height={280}
                  priority
                  className="product-card-image"
                />
                </Link>
                <FavoriteOutlinedIcon
                  onClick={() => {handlewWishList(index)}}
                  className={num.includes(index) ? "wishlist-icon-color" : "wishlist-icon"}
                  width={60}
                  height={60}
                />
                <PopupModal product={product}/>
                <div>
                <h6>Category</h6>
                <Link href={'/product'}><h4 className="two-line-text">
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
          <PaginationRounded/>

        </div>
      </div>
      <Footer/>
            <SideCart setProduct={""}/>
    </>
  )
}

export default Shop