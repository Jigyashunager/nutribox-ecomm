import React, { useState } from 'react'
import Rating from "@mui/material/Rating";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ProgressBar from '@/shared/productpage-shared/progress-bar';
import ProgressCircleBar from '@/shared/productpage-shared/progress-circle-bar';
import ReviewProductGallery from '@/shared/productpage-shared/reviews-product-gallery';
import Reviews from '@/shared/productpage-shared/reviews';
import MobileProductsSection from '../mobile-product-slider';


const MobileReviewsSection = () => {

    const [value, setValue] = useState(4)
    const newFunction = () => {
        
    }

  return (
    <div className='main-movile-reviews-section'>
          <div className='reviews'>
          <div className='review-heading'>
            <h5>CUSTOMER REVIEWS</h5>
          </div>
          <div className='review-box'>
          <div className='review-top-content'>
            <div>
              <Rating
                className="stars"
                name="read-only"
                value={value}
                readOnly
              />
              <h6>4 out of 5</h6>
            </div>
            <p className='num-reviews'>121 Customer Reviews</p>
            <button>Write a Review</button>
             </div>
          <div className='review-middle-content'>
            <div>
              <div>
                <h5 className='heading'>Ratings Distribution</h5>
                <div className='rating-bar-flex'>
                  <p> 5 stars</p>
                  <ProgressBar/>
                  <p>132</p>
                </div>
              </div>
              <div>
                <div className='rating-bar-flex'>
                  <p> 4 stars</p>
                  <ProgressBar/>
                  <p>22</p>
                </div>
              </div>
              <div>
                <div className='rating-bar-flex'>
                  <p> 3 stars</p>
                  <ProgressBar/>
                  <p>11</p>
                </div>
              </div>
              <div>
                <div className='rating-bar-flex'>
                  <p> 2 stars</p>
                  <ProgressBar/>
                  <p>6</p>
                </div>
              </div>
              <div>
                <div className='rating-bar-flex'>
                  <p> 1 stars</p>
                  <ProgressBar/>
                  <p>15</p>
                </div>
              </div>
              </div>
              <div>
                <div className='high-qualities'>
                  <div >
                  <ul className='div-flex'>
                    <li>
                      <ProgressCircleBar/>
                      <p className='circle-category'>Taste</p>
                    </li>
                    <li>
                    <ProgressCircleBar/>
                     <p className='circle-category'> Mixability</p>
                    </li>
                    <li>
                    <ProgressCircleBar/>
                     <p className='circle-category'> Efficacy</p>
                    </li>
                    <li>
                    <ProgressCircleBar/>
                     <p className='circle-category'> Value for money</p>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
              
          </div> 
          </div>
          <div className='gray-space'></div>
          <div className='good-bad-review'>
            <div className='good-bad-review-box'>
              <h5><ThumbUpAltIcon className='thumb-icon'/>Most Liked Positive Review</h5>
              <p>I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.</p>
            </div>
            <div className='good-bad-review-box'>
              <h5><ThumbDownAltIcon className='thumb-icon'/>Most Liked Negative Review</h5>
              <p>I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts.</p>
            </div>
          </div>
          <div className='gray-space'></div>
          <div className='customer-images'>
            <h5 className='heading'>Customer Images</h5>
            <ReviewProductGallery/>
                </div>
                <div className='gray-space'></div>
          
          <Reviews/>
          
        </div>
        <MobileProductsSection heading='BUDGET COMBOS' handleButtonClick={newFunction} handleSideCart={newFunction}/>

    </div>
  )
}

export default MobileReviewsSection;