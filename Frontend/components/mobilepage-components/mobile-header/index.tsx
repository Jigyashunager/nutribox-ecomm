import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LeftDrawer from '../left-header';
import Dropdown from '@/shared/dropdown';

const MobileHeader = () => {
  const router = useRouter();
    
  const gotoHome = () => {
    router.push('/');
  }

  

  return (
    <div>
        <div className='mobile-header'>
            <LeftDrawer openName='home' anchor='left'/>
            <div className='logo-image'>
                <Image
                  alt="nutritrix"
                  className='mt-10 mb-8 ml-8'
                  src="/logo1.svg"
                  width={440}
                  height={440}
                  priority
                  onClick={gotoHome}
                />
            </div>
            <div className="icons">
                <div>
                    <Dropdown/>
                </div>
                <div className=''>
                <p>
                  <ShoppingBagOutlinedIcon className="cart-icon text-8xl" />
                </p>
                <p className="circle"><span className='zero text-lg'>0</span></p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default MobileHeader