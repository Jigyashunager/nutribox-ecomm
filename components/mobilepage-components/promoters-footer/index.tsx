import Image from 'next/image'
import React from 'react'

const PromotersFooter = () => {
  return (
    <div className='mobile-promoters-footer'>
        <div className='gray-space'></div>
        <div className='padding-promoter'>
        <div className='promoter'>
            <div>
            <h6>Refer & Earn</h6>
            <p>Tell your friends to shop at Nutritrix $ Earn upto $200 when they shop with us</p>
            <button>Refer Now</button>
            </div>
            <div>
            <div className="promoter-img">
                <Image
                    alt="nutritrix"
                    src={"/man-phone.png"}
                    className='single-ad-image'
                    width={1500}
                    height={400}
                    priority
                />
            </div>
            </div>
        </div>
        </div>
        <div className='gray-space'></div>
        <div className='padding-promoter'>
        <div className='promoter'>
            <div>
            <h6>Instant Assistance</h6>
            <p>Wish to seek advice from nutritionists and dieticians? </p>
            <button>Book an Appointment</button>
            </div>
            <div>
            <div className="promoter-doctor-img">
                <Image
                    alt="nutritrix"
                    src={"/doctor.png"}
                    className='single-ad-image'
                    width={1300}
                    height={400}
                    priority
                />
            </div>
            </div>
        </div>
        </div>
        <div className='gray-space'></div>

    </div>
  )
}

export default PromotersFooter