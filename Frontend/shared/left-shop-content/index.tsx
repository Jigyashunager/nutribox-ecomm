import React, { useState } from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SquareIcon from '@mui/icons-material/Square';
import PriceFilter from '@/shared/productpage-shared/priceFilter';
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Link from "next/link";


const LeftShopContent = () => {

    const [value, setValue] = useState<number>(2);

  return (
    <div>
        <div className='desktop-left-shop-page-content'>
        <div className='left-shop-page-content'>
            <div className="left-popular-categories">
              <h5>POPULAR CATEGORIES</h5>
              <span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span>
            </div>
            <div className="left-popular-categories-list">
              <ul>
                <li><SquareIcon className='square-icon' />Apparel</li>
                <span>(13)</span>
                <li><SquareIcon className='square-icon' />Body & Fit</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Fat Burnspaners</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Muscle Builders</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Nutrition</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Protein</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Recovery</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Uncategorized</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Wellness</li>
                <span>(1)</span>
              </ul>
            </div>
            <div className="left-popular-categories">
              <h5>FILTER BY PRICE</h5>
              <span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span>
            </div>
            <PriceFilter />
            <div className="left-popular-categories">
              <h5>FILTER BY BRAND</h5>
              <span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span>
            </div>
            <div className="left-popular-categories-list">
              <ul>
                <li><SquareIcon className='square-icon' />Energy Gym</li>
                <span>(2)</span>
                <li><SquareIcon className='square-icon' />Gym Sports</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Healthy</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Power Fitness Club</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />The Fitness Center</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Victor Gym</li>
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
                  <Link href={'/product/product-name'}><Image
                    alt="nutritrix"
                    src="https://i.ibb.co/x8bNrqy/maxPC.jpg"
                    width={100}
                    height={100}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                  <Link href={'/product/product-name'}><h4 className="left-two-line-text">
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
                  <Link href={'/product/product-name'}><Image
                    alt="nutritrix"
                    src="https://i.ibb.co/Tck0tF8/naturePC.jpg"
                    width={100}
                    height={100}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                  <Link href={'/product/product-name'}><h4 className="left-two-line-text">
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
                  <Link href={'/product/product-name'}><Image
                    alt="nutritrix"
                    src="https://i.ibb.co/0nk9xzt/fusionPC.jpg"
                    width={100}
                    height={100}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                  <Link href={'/product/product-name'}><h4 className="left-two-line-text">
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
          </div>
          <div className='mobile-left-shop-page-content'>
            <div className='left-shop-page-content'>
            <div className="left-popular-categories">
              <h5>POPULAR CATEGORIES</h5>
              <span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span>
            </div>
            <div className="left-popular-categories-list">
              <ul>
                <li><SquareIcon className='square-icon' />Apparel</li>
                <span>(13)</span>
                <li><SquareIcon className='square-icon' />Body & Fit</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Fat Burnspaners</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Muscle Builders</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Nutrition</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Protein</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Recovery</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Uncategorized</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Wellness</li>
                <span>(1)</span>
              </ul>
            </div>
            <div className="left-popular-categories">
              <h5>FILTER BY PRICE</h5>
              <span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span>
            </div>
            <PriceFilter />
            <div className="left-popular-categories">
              <h5>FILTER BY BRAND</h5>
              <span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span>
            </div>
            <div className="left-popular-categories-list">
              <ul>
                <li><SquareIcon className='square-icon' />Energy Gym</li>
                <span>(2)</span>
                <li><SquareIcon className='square-icon' />Gym Sports</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Healthy</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Power Fitness Club</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />The Fitness Center</li>
                <span>(1)</span>
                <li><SquareIcon className='square-icon' />Victor Gym</li>
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
                  <Link href={'/product/product-name'}><Image
                    alt="nutritrix"
                    src="https://i.ibb.co/x8bNrqy/maxPC.jpg"
                    width={300}
                    height={300}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                  <Link href={'/product/product-name'}><h4 className="left-two-line-text">
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
                  <Link href={'/product/product-name'}><Image
                    alt="nutritrix"
                    src="https://i.ibb.co/Tck0tF8/naturePC.jpg"
                    width={300}
                    height={300}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                  <Link href={'/product/product-name'}><h4 className="left-two-line-text">
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
                  <Link href={'/product/product-name'}><Image
                    alt="nutritrix"
                    src="https://i.ibb.co/0nk9xzt/fusionPC.jpg"
                    width={300}
                    height={300}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                  <Link href={'/product/product-name'}><h4 className="left-two-line-text">
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
          </div>
    </div>
  )
}

export default LeftShopContent