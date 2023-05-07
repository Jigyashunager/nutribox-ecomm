import React, { useState } from 'react'
import Rating from "@mui/material/Rating";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ProgressBar from '../progress-bar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ProgressCircleBar from '../progress-circle-bar';
import ReviewProductGallery from '../reviews-product-gallery';
import Reviews from '../reviews';


const ReviewsSection = () => {

    const [value, setValue] = useState(4)

  return (
    <div>
          <div className='reviews'>
          <div className='review-heading'>
            <h5>CUSTOMER REVIEWS</h5>
          </div>
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
            <div className='percent-to-friends'>
              <h5><span><CheckCircleRoundedIcon/></span>86% </h5>
              <p>of respondents would recommend this to a friend</p>
            </div>
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
              <div>
               
              </div>
          </div> 
         
          <div className='good-bad-review'>
            <div>
              <h5><ThumbUpAltIcon className='thumb-icon'/>Most Liked Positive Review</h5>
              <p>I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.</p>
            </div>
            <div className='negative-review'>
              <h5><ThumbDownAltIcon className='thumb-icon'/>Most Liked Negative Review</h5>
              <p>I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts.</p>
            </div>
          </div>
          <div className='customer-images'>
            <h5 className='heading'>Customer Images</h5>
            <ReviewProductGallery/>
                </div>
          <div className='filter-cases'>
            <h5>Filter Best Uses:-</h5>
            <h6><span>22</span>Taste</h6>
            <h6><span>18</span>Quality</h6>
            <h6><span>16</span>Price</h6>
            <h6><span>15</span>Protien</h6>
            <h6><span>12</span>Benefits</h6>
            <h6><span>12</span>Stock</h6>
          </div>
          <Reviews/>
        </div>
    </div>
  )
}

export default ReviewsSection;