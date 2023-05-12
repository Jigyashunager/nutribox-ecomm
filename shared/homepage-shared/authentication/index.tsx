import React, { useState } from 'react'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface FormValues {
  email: string;
  password: string;
}


const Authentication = ({ wishlistCount }: { wishlistCount: any }) => {
  const [showLogin, setLoginShow] = useState<boolean>(false);
  const [showOtpForm, setOtpForm] = useState<boolean>(true);
  const [loginInput, setLoginInput] = useState<FormValues>({ email: "", password: "" })
  const [otpInput, setOtpInput] = useState<string>("")
  const router = useRouter();

  const dropDownShow = (event: any) => {
    if (event.defaultPrevented === false) {
      setLoginShow(!showLogin)
    }
  }

  const handleOtpForm = (event: any) => {
    console.log(showOtpForm)
    if (event.defaultPrevented === false) {
      setOtpForm(!showOtpForm)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInput({ ...loginInput, [name]: value });
  };
  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOtpInput(value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log("Form values:", loginInput);
  };

  const handleOtpSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log("OTPNUM", otpInput)
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
        {showOtpForm ? <DropdownButton id="dropdown-basic-button" title="Sign In / Register" show={showLogin} onClick={() => dropDownShow(event)}>
          <Dropdown.Item>
            <div>
              <div className="sign-in">
                <h4>Sign in</h4>
                <h4 onClick={gotoMyaaccount}>Create an Account</h4>
              </div>
              <form  className="form-login">
                <p className="form-tags">
                  <label>
                    Email Address
                    <span>*</span>
                  </label>
                  <input type='email' name="email"
                    onChange={(event) => handleInputChange(event)} value={loginInput.email} placeholder="Email address" />
                </p>
                <p className="form-tags">
                  <label>
                    Password
                    <span>*</span>
                  </label>
                  <input name="password"
                    value={loginInput.password}
                    onChange={(event) => handleInputChange(event)} placeholder="Password" />
                </p>
                <button onClick={(event) => handleSubmit(event)} type="submit">LOGIN</button>
                <p className="otp-line" onClick={(event) => handleOtpForm(event)}>Login/Sign Up with OTP</p>
                <p className="lost-password-line" onClick={gotoLostPassword}>Lost your password?</p>
              </form>
            </div>
          </Dropdown.Item>
        </DropdownButton> :
          <DropdownButton id="dropdown-basic-button" title="Sign In / Register" show={showLogin} onClick={() => dropDownShow(event)}>
            <Dropdown.Item>
              <div>
                <div className="sign-in">
                  <h4>Sign in</h4>
                  <h4 onClick={gotoMyaaccount}>Create an Account</h4>
                </div>
                <form className="form-login">
                  <p className="form-tags">
                    <label>
                      Phone Number
                      <span>*</span>
                    </label>
                    <input value={otpInput} onChange={(event) => handleOtpChange(event)} placeholder="Phone Number" />
                  </p>
                  <button type='submit' onClick={(event) => handleOtpSubmit(event)}>GET OTP</button>
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