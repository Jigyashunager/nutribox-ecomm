import React, { useState } from 'react'
import Rating from "@mui/material/Rating";
import Image from "next/image";
import DropdownComponent from '@/shared/homepage-shared/dropdown';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';

const Reviews = () => {

    const [value, setValue] = useState(4)

  return (
    <div>
        <div className='mobile-user-reviews'>
          <div className='reviews'>
            <div className='review-top-section'>
                <h5 className='reviewed-by'>
                Reviewed by 186 Customers
                </h5>
                <DropdownComponent/>
            </div>
          <ul className='reviews-li'>
            <li>
              <div className='div-flex'>
                <div className='avatar'>
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/swgDYRz/person.jpg"
                    width={44}
                    height={44}
                    priority
                  />
                </div>
                <div className='rating-name'>
                  <div className="left-stars-rating">
                    <Rating
                      className="stars"
                      name="read-only"
                      value={value}
                      readOnly
                    />
                    <span className="left-stars-count">(3)</span>
                  </div>
                  <h5 className='review-title'>Pretty Good</h5>
                </div>
              </div>
              <div className='review-para'>
                I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.
              </div>
              <div className='div-flex-review-icons'>
                <div className='div-flex'>
                <p className='review-name'>Karan Arora</p>
                <p className='review-date'>June 3, 2022</p>
                <p className='review-date'>Aligarh</p>
                </div>
                <div className='div-flex-thumb-icons'>
                <p>Was this review helpful?</p>
                <ThumbUpOffAltRoundedIcon className='thumb-green'/>
                <p className='thumb-counts'>(3)</p>
                <ThumbDownRoundedIcon className='thumb-red'/>
                <p className='thumb-counts'>(0)</p>
                <button>Report abuse</button>
                </div>
              </div>
            </li>
            <li>
              <div className='div-flex'>
                <div className='avatar'>
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/swgDYRz/person.jpg"
                    width={44}
                    height={44}
                    priority
                  />
                </div>
                <div className='rating-name'>
                  <div className="left-stars-rating">
                    <Rating
                      className="stars"
                      name="read-only"
                      value={value}
                      readOnly
                    />
                    <span className="left-stars-count">(3)</span>
                  </div>
                  <h5 className='review-title'>Pretty Good</h5>
                </div>
              </div>
              <div className='review-para'>
                I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.
              </div>

              <div className='div-flex-review-icons'>
                <div className='div-flex'>
                <p className='review-name'>Karan Arora</p>
                <p className='review-date'>June 3, 2022</p>
                <p className='review-date'>Aligarh</p>
                </div>
                <div className='div-flex-thumb-icons'>
                <p>Was this review helpful?</p>
                <ThumbUpOffAltRoundedIcon className='thumb-green'/>
                <p className='thumb-counts'>(3)</p>
                <ThumbDownRoundedIcon className='thumb-red'/>
                <p className='thumb-counts'>(0)</p>
                <button>Report abuse</button>
                </div>
              </div>
              </li>
            <li>
              <div className='div-flex'>
                <div className='avatar'>
                  <Image
                    alt="nutritrix"
                    src="https://i.ibb.co/swgDYRz/person.jpg"
                    width={44}
                    height={44}
                    priority
                  />
                </div>
                <div className='rating-name'>
                  <div className="left-stars-rating">
                    <Rating
                      className="stars"
                      name="read-only"
                      value={value}
                      readOnly
                    />
                    <span className="left-stars-count">(3)</span>
                  </div>
                  <h5 className='review-title'>Pretty Good</h5>
                </div>
              </div>
              <div className='review-para'>
                I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.
              </div>
              <div className='div-flex-review-icons'>
                <div className='div-flex'>
                <p className='review-name'>Karan Arora</p>
                <p className='review-date'>June 3, 2022</p>
                <p className='review-date'>Aligarh</p>
                </div>
                <div className='div-flex-thumb-icons'>
                <p>Was this review helpful?</p>
                <ThumbUpOffAltRoundedIcon className='thumb-green'/>
                <p className='thumb-counts'>(3)</p>
                <ThumbDownRoundedIcon className='thumb-red'/>
                <p className='thumb-counts'>(0)</p>
                <button>Report abuse</button>
                </div>
              </div>
            </li>
          </ul>
          </div>
          </div>
          <div className='gray-space'></div>
    </div>
  )
}

export default Reviews