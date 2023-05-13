import React, { useState } from 'react'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import regexContants from '@/config/regexConstants/regexContants';

interface FormValues {
  email: string;
  password: string;
  phone_number: string;
}


const Authentication = ({ wishlistCount }: { wishlistCount: any }) => {
  const [showLogin, setLoginShow] = useState<boolean>(false);
  const [showOtpForm, setOtpForm] = useState<boolean>(true);
  const router = useRouter();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();
  
  const onSubmit: SubmitHandler<FormValues> = async (data: any, event: any) => {
    event.preventDefault()
    console.log(data)
  }

  const validateMessage = (condition: boolean, message: string | undefined) => {
    if (condition) {
      console.log(condition)
        return message;
    }
  }

  const dropDownShow = (event: any) => {
    if (event.defaultPrevented === false) {
      setLoginShow(!showLogin)
    }
  }

  const handleOtpForm = (event: any) => {
    if (event.defaultPrevented === false) {
      setOtpForm(!showOtpForm)
    }
  }


  
  const gotoMyaaccount = () => {
    router.push('/my-account');
  }
  const gotoLostPassword = () => {
    router.push('/my-account/lost-password');
  }


  return (
    <>
      <div className='authentication'>
        <PersonOutlineIcon className="person-icon" />
        {showOtpForm ? <DropdownButton  id="dropdown-basic-button" title="Sign In / Register" show={showLogin} onClick={() => dropDownShow(event)}>
          <Dropdown.Item >
            <div>
              <div className="sign-in">
                <h4>Sign in</h4>
                <h4 onClick={gotoMyaaccount}>Create an Account</h4>
              </div>
              <form className="form-login">
                <div className="form-tags">
                  <label>
                    Email Address
                    <span>*</span>
                  </label>
                  <input type='email' placeholder="Email address" {...register('email', {
                        required: true, pattern: regexContants.EMAIL,
                      })} />
                  
                  <div className="text-danger font-weight-bold small">
                        {validateMessage(errors?.email?.type === "required", "Please Enter Email")}
                        {validateMessage(errors?.email?.type === "pattern", "Please Enter Valid Email")}
                      </div>
                </div>
                <div className="form-tags">
                  <label>
                    Password
                    <span>*</span>
                  </label>
                  <input placeholder="Password" {...register('password', {
                        required: true
                      })}/>
                      
                      <div className="text-danger font-weight-bold small">
                        {validateMessage(errors?.password?.type === "required", "Please Enter Password")}
                      </div>
                </div>
                <button type="submit" className='login-button' onClick={handleSubmit(onSubmit)}>LOGIN</button>
                <p className="otp-line" onClick={(event) => handleOtpForm(event)}>Login/Sign Up with OTP</p>
                <p className="lost-password-line" onClick={gotoLostPassword}>Lost your password?</p>
              </form>
            </div>
          </Dropdown.Item>
        </DropdownButton> :
          <DropdownButton id="dropdown-basic-button" title="Sign In / Register" show={showLogin} onClick={() => dropDownShow(event)}>
            <Dropdown.Item>
              <div className='otp-main-form'>
                <div className="sign-in">
                  <h4>Sign in</h4>
                  <h4 onClick={gotoMyaaccount}>Create an Account</h4>
                </div>
                <form  className="form-login">
                  <div className="form-tags">
                    <label>
                      Phone Number
                      <span>*</span>
                    </label>
                    <input placeholder="Phone Number" {...register('phone_number', {
                        required: true, pattern: regexContants.MOBILE,
                      })}/>
                    
                    <div className="text-danger font-weight-bold small">
                        {validateMessage(errors?.phone_number?.type === "required", "Please Enter Phone Number")}
                        {validateMessage(errors?.phone_number?.type === "pattern", "Please Enter Valid Phone Number")}
                      </div>
                  </div>
                  <button type='submit' className='otp-button' onClick={handleSubmit(onSubmit)}>GET OTP</button>
                  <p className="otp-line" onClick={(event) => handleOtpForm(event)}>Login/Sign Up with Email</p>
                  <p className="lost-password-line" onClick={gotoLostPassword}>Lost your password?</p>
                </form>
              </div>
            </Dropdown.Item>
          </DropdownButton>}
      </div>
    </>
  )
}

export default Authentication