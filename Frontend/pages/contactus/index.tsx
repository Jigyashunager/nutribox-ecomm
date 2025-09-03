import Header from '@/components/homepage-components/main-header'
import Footer from '@/shared/homepage-shared/footer'
import React from 'react'
import Image from "next/image";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Checkbox from '@mui/material/Checkbox';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/shared/map-leaflet'), {
    ssr: false
})


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ContactUs = () => {
    return (
        <div className='contactus'>
            <div className='contactus-top'>
                <Image
                    alt="nutritrix"
                    src={'https://i.ibb.co/pxG1rnS/contact.jpg'}
                    width={400}
                    height={400}
                    priority
                    className='contact-us-banner'
                />
                <div className='about-us-top-middle'>
                    <h6>About Us</h6>
                    <h5>A New Era in Sports Nutrition</h5>
                    <p>Nutritix is the leading supplements and health store retailer in South Africa, situated across the country with 27+ stores and an online store, stocking the latest international and local brands at unbeatable prices.</p>
                    <button>GO TO SHOP</button>
                </div>
                <div className='get-in-touch'>
                    <h4>GET IN TOUCH</h4>
                    <div>
                        <h5><CottageOutlinedIcon/> Store Location</h5>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                    </div>
                    <div>
                        <h5><LocalPhoneOutlinedIcon/> Phone Number </h5>
                        <p>+(40) 800 0246 888</p>
                    </div>
                    <div>
                        <h5><EmailOutlinedIcon/> Email Us </h5>
                        <p>contact@example.com</p>
                    </div>
                    <div className='open-time'>
                        <h5><WatchLaterOutlinedIcon/>Mon - Sat: 8.00 - 17.00</h5>
                        <h5  className='time'>Sunday: 9.00 - 18.00</h5>
                    </div>

                </div>
            </div>
            <div className='map-feedback'>
                <div>
                <div className="contactus-heading">
                    <h2>SEND US FEEDBACK</h2>
                    <span className="arrow-span">
                        <ArrowForwardIosIcon width={60} height={60} />
                    </span>
                </div>
                <div className='contact-form-content'>
                    <h5>Use the form below to get in touch with the sales team</h5>
                    <div className='inputs'>
                        <input placeholder='Your Name*' type='text'/>
                        <input placeholder='Email Address*' type='email'/>
                        <input placeholder='Your Website' type='text'/>
                    </div>
                    <textarea id="my-textarea" placeholder='Comment' name="message" rows={4} cols={50}></textarea>
                    <div>
                        <h5 className='checkbox-save'><Checkbox {...label} />Save my name, email, and website in this browser for the next time I comment.</h5>
                        <button>SEND YOUR MESSAGE</button>
                    </div>
                </div>       
                </div>
                <Map/>
                </div>

        </div>
    )
}

export default ContactUs