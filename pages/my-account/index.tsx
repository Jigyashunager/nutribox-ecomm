import Header from '@/components/homepage-components/main-header'
import Footer from '@/shared/homepage-shared/footer'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';
import { SubmitHandler, useForm } from 'react-hook-form';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MyAccount = () => {
  return (
    <div>
      <Header wishlistCount='2'/>
      <div className='page-distribution-heading'>
                <Link href="/"><h6>Homepage</h6> </Link>
                <span><ArrowForwardIosIcon /></span>
                <h5>My Account</h5>
      </div>
      <div className='my-account'>
              <div className='signup-form'>
                    <div className="sign-in">
                      <h4>REGISTER</h4>
                    </div>
                    <form className="form-login">
                      <p className="form-tags">
                        <label>
                          Email address
                          <span>*</span>
                        </label>
                        <input placeholder="Enter your email address..." />
                      </p>
                      <p className="form-tags">
                        <label>
                          Password
                          <span>*</span>
                        </label>
                        <input placeholder="Enter your password.." />
                      </p>
                      <div className='remember-lost'>
                        <h5 className='checkbox-save'><Checkbox {...label} />Remember Me</h5>
                        <Link href={'/my-account/lost-password'}><p className="lost-password-line">Lost your password?</p></Link>
                      </div>
                      <button>REGISTER</button>
                      </form>
              </div>
              <div className='otp-form'>
              <div className="sign-in-otp">
                      <h4>LOGIN OR SIGN-UP</h4>
                    </div>
                    <form className="form-login">
                      <p className="form-tags">
                        <label>
                          Phone Number
                          <span>*</span>
                        </label>
                        <input placeholder="Enter your phone number..." />
                      </p>
                      <p>
                        An OTP will be sent to your phone number.
                      </p>
                      <p>
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                      </p>
                      <button>GET OTP</button>
                      </form>
              </div>
      </div>
      <Footer/>
    </div>
  )
}

export default MyAccount