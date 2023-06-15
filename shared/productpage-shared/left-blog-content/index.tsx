import React from 'react'
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SquareIcon from '@mui/icons-material/Square';
import Link from "next/link";

const LeftBlogContent = () => {
  return (
    <div>
      <div className='desktop-left-blog-page-content'>
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
            
            <div className="left-popular-categories-list">
         
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
    
            </div>   
          </div>
          </div>
    </div>
  )
}

export default LeftBlogContent