import React, { useState, useEffect } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const QuantityBox = () => {

    let [productValue, setProductValue] = useState<number>(0)

    const substract = () => {
        if(productValue > 0){
        productValue = productValue - 1
        setProductValue(productValue)
    }
    }
    const addition = () => {
        if(productValue >= 0){
            productValue = productValue + 1
            setProductValue(productValue)
        }
    }
    return (
        <>
        <div className='main-quantity-box'>
                <button onClick={substract} className="minus"><RemoveOutlinedIcon/></button>
                <div><p>{productValue}</p></div>
                <button onClick={addition} className="plus"><AddOutlinedIcon/></button>
        </div>
        </>
    )
}

export default QuantityBox
