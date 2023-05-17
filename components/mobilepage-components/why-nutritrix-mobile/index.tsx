import React from 'react'
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';

const WhyNutritrixMobile = () => {
  return (
    <>
    <div className='gray-space'></div>
    <div className='mobile-why-nutritrix'>
        <div className='main-why-nutritrix'>
        <div className='headings-why-nutritrix'>
           <h2>EXPERIENCE THE NUTRITX DIFFERENCE</h2> 
           <h6>Everything you need to Build Your Strength</h6>
        </div>
        </div>
        <div className='pointers-why-nutritrix'>
            <div className='inside-headings'>
                <div><LocalFloristOutlinedIcon className='pointers-icon'/></div>
                <div>
                <h5>Heritage of Quality</h5>
                <p>Selection of products with exceptional formulations that come from the hand of the best specialists.</p>
                </div>
            </div>
            <div className='inside-headings'>
                <div><SportsMartialArtsOutlinedIcon className='pointers-icon'/></div>
                <div>
                <h5>Nutrition Experts</h5>
                <p>For people who have made a healthy existence their philosophy of life, includes nutritional supplements</p>
                </div>
            </div>
            <div className='inside-headings'>
                <div><PlaylistAddCheckCircleOutlinedIcon className='pointers-icon'/></div>
                <div>
                <h5>Truth in Labeling</h5>
                <p>Reflecting our practical sense, its made up of products that are simple, mostly single-ingredient</p>
                </div>
            </div>
            <div className='inside-headings'>
                <div><LocalDiningOutlinedIcon className='pointers-icon'/></div>
                <div>
                <h5>Unique Formulation</h5>
                <p>Organic products and organic foods, especially for those with a strong preference for natural</p>
                </div>
            </div>
        </div>
        </div>
        </>
          )
}

export default WhyNutritrixMobile