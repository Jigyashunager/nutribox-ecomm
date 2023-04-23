import Header from '@/components/homepage-components/main-header'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BannerOne from '@/shared/homepage-shared/bannerOne';
import SquareIcon from '@mui/icons-material/Square';
import Link from 'next/link';
const Shop = () => {
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
        </div>
      </div>

    </>
  )
}

export default Shop