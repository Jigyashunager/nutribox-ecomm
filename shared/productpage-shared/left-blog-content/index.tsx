import React from 'react'
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SquareIcon from '@mui/icons-material/Square';
import Link from "next/link";

const LeftBlogContent = () => {
  return (
    <div>
        <div className='left-shop-page-content'>
            
            <div className="left-popular-categories">
              <h5>SEARCH<span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span></h5>
              
            </div>
              <div className='search-blog'>
                  
              <input
                  type="text"
                  name="TEXT"
                  placeholder=" Search "
                  className="search-blog-input"
                  />
                  <button>Search</button>  
              </div>
            <div className="left-popular-categories">
              <h5>BLOG CATEGORIES  <span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span></h5>
            
            </div>
            <div className="left-popular-categories-list">
                <ul>
                  <li><SquareIcon className='square-icon'/>Business</li>
                  <span>(13)</span>
                  <li><SquareIcon className='square-icon'/>Entertainment</li>
                  <span>(1)</span>
                  <li><SquareIcon className='square-icon'/>Lifestyle</li>
                  <span>(1)</span>
                  <li><SquareIcon className='square-icon'/>Nutrition Tips</li>
                  <span>(1)</span>
                  <li><SquareIcon className='square-icon'/>Tip & Trick</li>
                  <span>(1)</span>
                  <li><SquareIcon className='square-icon'/>Uncategorized</li>
                  <span>(1)</span>
                </ul>
            </div>          
            
          <div className="left-popular-categories">
              <h5>LATEST POST <span className="arrow-span">
                <ArrowForwardIosIcon width={10} height={10} />
              </span></h5>
             
            </div>
            <div className="left-popular-categories-list">
            <div className="left-product-card">
                <div className="left-blog-image">
                  <Link href={'/product'}><Image 
                    alt="nutritrix"
                    src="https://i.ibb.co/FznBj88/b8.jpg"
                    width={120}
                    height={80}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                <Link href={'/product'}><h4 className="left-two-line-text">
                How To Teach Children To Dress Themselves: The Ultimate Guide
                </h4>
                 
                  <div className="left-blog-date">
                    <h5>MAY 24, 2023</h5>
                  </div></Link>
                </div>
              </div>
            
            <div className="left-product-card">
                <div className="left-blog-image">
                  <Link href={'/product'}><Image 
                    alt="nutritrix"
                    src="https://i.ibb.co/k8Z6KTn/b7.jpg"
                    width={120}
                    height={80}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                <Link href={'/product'}><h4 className="left-two-line-text">
                How To Teach Children To Dress Themselves: The Ultimate Guide
                </h4>
                 
                  <div className="left-blog-date">
                    <h5>MAY 24, 2023</h5>
                  </div></Link>
                </div>
              </div>
            
            <div className="left-product-card">
                <div className="left-blog-image">
                  <Link href={'/product'}><Image 
                    alt="nutritrix"
                    src="https://i.ibb.co/fnjvfQg/b6.jpg"
                    width={120}
                    height={80}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                <Link href={'/product'}><h4 className="left-two-line-text">
                Honor Earth Day Fourth Annual Ladybug Love Campaign
                </h4>
              
                  <div className="left-blog-date">
                    <h5>MAY 24, 2023</h5>
                  </div></Link>
                </div>
              </div>
            <div className="left-product-card">
                <div className="left-blog-image">
                  <Link href={'/product'}><Image 
                    alt="nutritrix"
                    src="https://i.ibb.co/n6YjkJD/b5.jpg"
                    width={120}
                    height={80}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                <Link href={'/product'}><h4 className="left-two-line-text">
                Providing Filtered Water For The Communities
                </h4>
              
                  <div className="left-blog-date">
                    <h5>May 24, 2023</h5>
                  </div></Link>
                </div>
              </div>
            <div className="left-product-card">
                <div className="left-blog-image">
                  <Link href={'/product'}><Image 
                    alt="nutritrix"
                    src="https://i.ibb.co/WpXhXKp/b4.jpg"
                    width={120}
                    height={80}
                    priority
                  /></Link>
                </div>
                <div className="left-product-info">
                <Link href={'/product'}><h4 className="left-two-line-text">
                The Ultimate Christmas Gift Guide for Car Lovers
                </h4>
              
                  <div className="left-blog-date">
                    <h5>May 24, 2023</h5>
                  </div></Link>
                </div>
              </div>
              <div className="left-popular-categories">
              <h5>FILTER BY TAGS</h5>
              <span className="arrow-span-filter">
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
            <div className='left-bottom-image'>
                <Image 
                    alt="nutritrix"
                    src="https://i.ibb.co/BzkJp5r/gym1.jpg"
                    width={340}
                    height={340}
                    priority
                  />
            </div>
            </div>   
          </div>
    </div>
  )
}

export default LeftBlogContent