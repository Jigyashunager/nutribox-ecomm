import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const SideCart = ({setProduct}:{setProduct: any}) => {

  const [closeState, setCloseState] = useState<boolean>(false)
  const [productAdded, setProductAdded] = useState<Array<object>>([])

  useEffect(() => {
      document.addEventListener('click', (event) => {
        const targetElement = event.target as HTMLElement;
        const width = targetElement.offsetWidth;
        if(width === 118 || width === 320 || width === 49 || width === 80 || width === 293 || width === 139 || width === 294 || width === 202 || width === 102){
          setCloseState(true)
        } else {
          setCloseState(false)
        }
      })
    
  }, [setProduct])
  
  

  const closeSideCart = () => {
    setCloseState(false)
  } 

  return (
    <>
    <div className='float-right' id='myDiv'  style={ closeState ? { display:'block'} : {display : 'none'} }  
>
        <div className='top-side-cart'> 
        <h5>Shopping Cart</h5>
        <div onClick={closeSideCart} className='close'>
        <h6 >CLOSE</h6>
        <CloseIcon className='closeIcon'/>
        </div>
        </div>
        <div className='bottom-side-cart'>
        <div className='subtotal'>
        <h5>Sub Total:</h5>
        <span>$0</span>
        </div>
        <button className='view-cart'>VIEW CART</button>
        <button className='checkout'>CHECKOUT</button>
        </div>
    </div>
    </>
  )
}

export default SideCart;