import React from 'react'
import Image from "next/image";
import Header from '@/components/homepage-components/main-header';
import WhyNutritrix from '@/shared/homepage-shared/whynutritrix';

const AboutUs = () => {
    return (
        <div className='about-us'>
        <div>
            <Header wishlistCount='2' />
            <div>
                <Image
                    alt="nutritrix"
                    src={'/gainer.webp'}
                    width={1400}
                    height={530}
                    priority
                    className='about-us-banner'
                />
            </div>
            <div className='about-us-top'>
                <div>
                <Image
                    alt="nutritrix"
                    src={'https://i.ibb.co/sP34rZj/h2-img9.jpg'}
                    width={480}
                    height={650}
                    priority
                    className='about-us-banner'
                />
                <div className='years-experience'><p className='over'>OVER</p> <p className='years'>30</p><p className='experience'> YEARS EXPERIENCE</p></div>
                </div>
                <div>
                <div className='square-box'></div>
                    <div className='square-box-1'></div>
                    <h3>SUPPORTING ATHLETES SINCE 1983</h3>
                   
                    <h4>WE ARE A LEADER IN SPORTS NUTRITION</h4>
                    <p>We believe you get out what you put in – which is why our certified manufacturing facilities only use high quality ingredients and strict quality control when making our products Nutritix is the leading supplements and health store retailer in South Africa, situated across the country with 27+ stores and an online store, stocking the latest international and local brands at unbeatable prices.</p>
                    <button>CONTACT US</button>
                </div>
            </div>
        </div>
        <WhyNutritrix/>
        </div>
    )
}

export default AboutUs