import React from 'react'
import myCustomData from "@/json-data/data.json";
import Image from "next/image";

const ReviewProductGallery = () => {
  return (
    <div className='review-product-image'>
      {myCustomData?.data.map((product, index) => (
        <div key={product.id}>
          {index < 5 ? <div key={product.id} >
            <Image
              alt="nutritrix"
              src={product.image}
              width={200}
              height={200}
              priority
              className='images'
            />
          </div> : index === 5 ?
            <div key={product.id} className="image-container">
              <Image src={product.image} alt="My Image" width={200} height={200} />
              <div className="image-overlay">
                <p>+10 </p>
              </div>
            </div> : ""}
        </div>
      ))}


    </div>
  )
}

export default ReviewProductGallery