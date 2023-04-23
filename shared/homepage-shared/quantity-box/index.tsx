import React, { useState, useEffect } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const QuantityBox = ({price, handleBundleTotal}:{price:string, handleBundleTotal:Function}) => {

    let [productValue, setProductValue] = useState<number>(1)

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

    useEffect(() => {
        handleBundleTotal(productValue)
    }, [productValue])
    
    return (
        <>
        <div className="flex-quantity">
        <div className='main-quantity-box'>
                <button onClick={substract} className="minus"><RemoveOutlinedIcon/></button>
                <div><p>{productValue}</p></div>
                <button onClick={addition} className="plus"><AddOutlinedIcon/></button>
        </div>
        {price ? <h6>${price}</h6> : ""}
        </div>
        </>
    )
}

export default QuantityBox
