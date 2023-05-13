import Header from '@/components/homepage-components/main-header'
import Footer from '@/shared/homepage-shared/footer'
import Link from 'next/link'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LostPassword = () => {
  return (
    <>
    <div className='page-distribution-heading'>
                <Link href="/"><h6>Homepage</h6> </Link>
                <span><ArrowForwardIosIcon /></span>
                <Link href="/my-account"><h6>My Account</h6></Link>
                <span><ArrowForwardIosIcon /></span>
                <h5>Lost Password</h5>
            </div>
    <div className='lost-password'>
            
            <div>
                <h6>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</h6>
                <h6>Username or email</h6>
                <div className='inputs'>
                  <input placeholder='Email Address*' type='email'/>
                </div>
                <button>RESET PASSWORD</button>
            </div>
    </div>

    </>
  )
}

export default LostPassword