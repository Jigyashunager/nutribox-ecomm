import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
                        width={55}
                        height={55}
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
                    <div className='mobile-icons-footer'>
                        <div className='icon-flex'>
                            <EmailIcon />
                            <h6>care@nutritrix.com</h6>
                        </div>
                        <div className='icon-flex'>
                            <LocalPhoneIcon />
                            <h6>0124-4616444</h6>
                        </div>
                        <div className='icon-flex'>
                            <LocationOnIcon />
                            <h6>The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp, Medicover Hospital, Patrika Nagar, Hyderabad</h6>
                        </div>
                    </div>
                </div>
                <div className='mobile-subscribe'>

                    <div className='mobile-footer-top'>
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
                        <div className='img-flex'>
                            <Image
                                className="footer-image"
                                alt="nutritrix"
                                src="/authenticity.png"
                                width={55}
                                height={55}
                                priority
                            />
                            <Image
                                className="footer-image"
                                alt="nutritrix"
                                src="/secure.png"
                                width={55}
                                height={55}
                                priority
                            />
                            <Image
                                className="footer-image"
                                alt="nutritrix"
                                src="/Return.png"
                                width={55}
                                height={55}
                                priority
                            />
                        </div>
                    </div>

                    <div className='follow-us'>
                        <h6>Follow Us on</h6>
                        <div className='img-flex'>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <PinterestIcon />
                        </div>
                    </div>
                </div>
                
                <div className='img-flex-pay'>
                        <Image
                            className="footer-image"
                            alt="nutritrix"
                            src="/pay1.svg"
                            width={300}
                            height={300}
                            priority
                        />
                        <Image
                            className="footer-image"
                            alt="nutritrix"
                            src="/pay2.svg"
                            width={300}
                            height={300}
                            priority
                        />
                        <Image
                            className="footer-image"
                            alt="nutritrix"
                            src="/pay3.svg"
                            width={300}
                            height={300}
                            priority
                        />
                        <Image
                            className="footer-image"
                            alt="nutritrix"
                            src="/pay4.svg"
                            width={300}
                            height={300}
                            priority
                        />
                        <Image
                            className="footer-image"
                            alt="nutritrix"
                            src="/pay5.svg"
                            width={300}
                            height={300}
                            priority
                        />
                        <Image
                            className="footer-image"
                            alt="nutritrix"
                            src="/pay6.svg"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                    <div className='mobile-below-footer'>
                        <p>Copyright @ 2023, Nutritrix.com, or its affiliates</p>
                        <p>Terms & Conditions | Privacy Policy | Return Policy | Disclaimer</p>
                    </div>
            </div>

        </div>
    )
}

export default MobileFooter