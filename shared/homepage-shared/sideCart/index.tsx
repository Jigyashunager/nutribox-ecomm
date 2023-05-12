import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";

const SideCart = ({ setProduct }: { setProduct: any }) => {

  const [closeState, setCloseState] = useState<boolean>(false)
  const [productAdded, setProductAdded] = useState<Array<any>>([])
  const [productCount, setProductCount] = useState(0)
  var count;
  useEffect(() => {
    document.addEventListener('click', (event) => {
      const targetElement = event.target as HTMLElement;
      const width = targetElement.offsetWidth;
      if (width === 254 || width === 102 || width === 300 || width === 51 || width === 269 || width === 118 || width === 49 || width === 80 || width === 293 || width === 139 || width === 202 || width === 102 || width === 352 || width === 315 ) {
        setCloseState(true)
      }
      else {
        setCloseState(false)
      }
    })
    if (setProduct.value) {
      if(productAdded.includes(setProduct.value)){
        
      } else {
        const newProductAddedArray = [...productAdded, setProduct.value];
        setProductAdded(newProductAddedArray)

      }
    }
    const myDiv = document.getElementById("myDiv")
    const mainDiv = document.getElementById("__next")
    if (myDiv?.style.display === "block" && mainDiv) {
      mainDiv.style.pointerEvents = "none"
      myDiv.style.pointerEvents = "all"
    } else {
      if (mainDiv) {
        mainDiv.style.pointerEvents = "all"
      }
    }

  }, [setProduct, closeState, productAdded])



  return (
    <>
      <div className='float-right' id='myDiv' style={closeState ? { display: 'block' } : { display: 'none' }}
      >
        <div className='top-side-cart'>
          <h5>Shopping Cart</h5>
          <div className='close'>
            <h6>CLOSE</h6>
            <CloseIcon className='closeIcon' />
          </div>
        </div>
        <div className='middle-top-cart'>
          {productAdded?.map((product, index) => (
            <div key={index} className='middle-cart-content'>
              <div className='cart-product-image'>
                <Image
                  alt="nutritrix"
                  src={product.image}
                  width={51}
                  height={51}
                  priority
                  className="product-card-image"
                />
              </div>
              <div className='headings-cart'>
                <h5>
                  {product.name}
                </h5>
                <h6>
                  {product.price}
                </h6>
                <div>
                  <p>×</p>

                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='bottom-side-cart'>
          <div className='subtotal'>
            <h5>Sub Total:</h5>
            <span>${productCount}</span>
          </div>
          <button className='view-cart'>VIEW CART</button>
          <button className='checkout'>CHECKOUT</button>
        </div>
      </div>
    </>
  )
}

export default SideCart;