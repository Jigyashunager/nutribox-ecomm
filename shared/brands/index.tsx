import React from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from '../slider';

const Brands = () => {
    return (
        <>
        <div className='brands-main'>
        <div className="brands-heading">
           <h2>SHOP BY BRANDS</h2> 
           <span className="arrow-span">
            <ArrowForwardIosIcon width={60} height={60} />
          </span>
        </div>
        <Slider value="Brands"/>
        </div>
        </>
    )
}

export default Brands;
