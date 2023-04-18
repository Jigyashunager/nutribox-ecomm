import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='footer-top'>
                <div className="footer-signup">
                    <h2>SIGN UP FOR NEWSLETTER</h2> 
                    <span className="arrow-span">
                    <ArrowForwardIosIcon width={60} height={60} />
                    </span>
                </div>
                <p>Stay up to date with recent news, advice and weekly offers</p>
                <input
                type="email"
                name="EMAIL"
                placeholder=" Email address"
                className="email-input"
                />
                <button>SUBSCRIBE</button>     
            </div>
            <div className='straight-line'></div>
            <div className='footer-middle'>
                <div className='logo-image'>
                <Image
                  className="slider-image"
                  alt="nutritrix"
                  src="/logo1.svg"
                  width={35}
                  height={35}
                  priority
                />
                </div>
                <div className='footer-content'>
                    <h5>Customer Service</h5>
                    <h6>Help Center</h6>
                    <h6>My Account</h6>
                    <h6>Track My Order</h6>
                    <h6>Return Policy</h6>
                    <h6>Gift Cards</h6>
                </div>
                <div className='footer-content'>
                    <h5>About Us</h5>
                    <h6>Company Info</h6>
                    <h6>Press Releases</h6>
                    <h6>Careers</h6>
                    <h6>Investor Relations</h6>
                </div>
                <div className='footer-content'>    
                    <h5>Quick Links</h5>
                    <h6>Search</h6>
                    <h6>Become a Reseller</h6>
                    <h6>About Us</h6>
                    <h6>Contact Us</h6>
                </div>
                <div className='footer-content'>    
                    <h5>Catalogs</h5>
                    <h6>Protein</h6>
                    <h6>Performane</h6>
                    <h6>Weight Management</h6>
                    <h6>Vitamins & Health</h6>
                </div>
            </div>
            <div className='straight-line'></div>
            <div className='footer-flex'>
                <div className='phone-no'>
                    <h5>NEED HELP</h5>
                    <h6>+(91) 8791 361 279 </h6>
                </div>
                <div className='vertical-line'></div>
                <div className='social-icons'>
                    <h5 className='follow-heading'> FOLLOW US</h5>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <InstagramIcon/>
                        <PinterestIcon/>
                </div>
                <div className='vertical-line'></div>
                <div className='cards'>
                    <h5>WE ACCEPT</h5>
                    <Image
                  alt="nutritrix"
                  src="/cards.png"
                  width={220}
                  height={30}
                  priority
                />
                </div>
            </div>
            <div className='straight-line'></div>
            <h6 className='copyright'>Copyright © 2022 Nutritix. All rights reserved.</h6>
        </div>
        </>
    )
}

export default Footer
