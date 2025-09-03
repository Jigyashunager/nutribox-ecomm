import React from 'react'
import Image from "next/image";
import Header from '@/components/homepage-components/main-header';
import WhyNutritrix from '@/shared/homepage-shared/whynutritrix';
import InfluencerSlider from '@/shared/productpage-shared/influencers';
import Footer from '@/shared/homepage-shared/footer';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SimpleAccordions from '@/shared/productpage-shared/accordion';

const FAQs = () => {
  return (
    <div className='faqs'>
        <div>
            <div className='desktop-aboutus-img'>
                <Image
                    alt="nutritrix"
                    src={'/cover.jpg'}
                    width={1400}
                    height={530}
                    priority
                    className='about-us-banner'
                />
            </div>
            <div className='mobile-aboutus-img'>
                <Image
                    alt="nutritrix"
                    src={'/gymb2.jpg'}
                    width={1370}
                    height={530}
                    priority
                    className='about-us-banner'
                />
            </div>
            <div className='faqs-top'>
                <div className='general-faqs'>
                    <div className="faqs-heading">
                        <h2>GENERAL QUESTIONS</h2>
                        <span className="arrow-span">
                            <ArrowForwardIosIcon width={60} height={60} />
                        </span>
                    </div>
                    <p>The General Questions section on a FAQs webpage provides visitors with an introduction to the purpose and functionality of the page. These questions are typically broad in scope and provide a foundation for the more specific questions that follow. In this section, visitors can learn about the nature of FAQs and how to use them effectively. </p>
                </div>
                <div>
                    <SimpleAccordions/>
                </div>
            </div>
            <div className='faqs-top'>
                <div className='general-faqs'>
                    <div className="faqs-heading">
                        <h2>ADVANCED QUESTIONS</h2>
                        <span className="arrow-span">
                            <ArrowForwardIosIcon width={60} height={60} />
                        </span>
                    </div>
                    <p>The General Questions section on a FAQs webpage provides visitors with an introduction to the purpose and functionality of the page. These questions are typically broad in scope and provide a foundation for the more specific questions that follow. In this section, visitors can learn about the nature of FAQs and how to use them effectively. </p>
                </div>
                <div>
                    <SimpleAccordions/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default FAQs