import React, { useState, useEffect } from "react";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';

const HeaderHero = () => {
  return (
    <>
        <div className="header-hero-tags">
            <LocalShippingOutlinedIcon className="icons"/>
            <h4>Free Shipping orders over $75</h4>
            <p>|</p>
            <Inventory2OutlinedIcon className="icons"/>
            <h4>Easy returns on all orders</h4>
            <p>|</p>
            <HeadsetOutlinedIcon className="icons"/>
            <h4>24/7 Customer support</h4>
        </div>
    </>
  );
};

export default HeaderHero;
