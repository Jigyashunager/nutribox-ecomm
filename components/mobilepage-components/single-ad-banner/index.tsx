import React from 'react'
import Image from "next/image";

const SingleAdBanner = ({image}: {image: string}) => {
    return (
        <>
        <div className='single-ad-banner'>
            <div className="offer-img">
                <Image
                    alt="nutritrix"
                    src={image}
                    className='single-ad-image'
                    width={1300}
                    height={400}
                    priority
                />
            </div>
        </div>
        <div className='gray-space'></div>
        </>
    )
}

export default SingleAdBanner