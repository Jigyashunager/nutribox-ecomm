import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Link from 'next/link';

const MobileFooter = () => {
  return (
    <div>
        <div className='mobile-footer'>
        <div className='logo-footer-image'>
                <Image
                  className="slider-image"
                  alt="nutritrix"
                  src="/logo1.svg"
                  width={35}
                  height={35}
                  priority
                />
                </div>
        <div className='mobile-footer-middle'>
            
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
                    <Link href={'/faqs'}><h6>FAQs</h6></Link>
                    <h6>Become a Reseller</h6>
                    <Link href={'/aboutus'}><h6>About Us</h6></Link>
                    <Link href={'/contactus'}><h6>Contact Us</h6></Link>
                </div>
                <div className='footer-content'>    
                    <h5>Catalogs</h5>
                    <h6>Protein</h6>
                    <h6>Performane</h6>
                    <h6>Weight Management</h6>
                    <h6>Vitamins & Health</h6>
                </div>
            </div>
            <div className='mobile-footer-contact-us'>
                    <h5>Need help?</h5>
            </div>
            </div>

        </div>
  )
}

export default MobileFooter