import Header from '@/components/homepage-components/main-header'
import Footer from '@/shared/homepage-shared/footer'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';
import { SubmitHandler, useForm } from 'react-hook-form';
import regexContants from '@/config/regexConstants/regexContants';
import LostPasswordForm from '@/shared/lost-password-form';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type FormValues = {
  email: string;
  password: string;
};

const MyAccount = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: any, event: any) => {
    event.preventDefault()
    console.log(data)
  }

  const validateMessage = (condition: boolean, message: string | undefined) => {
    if (condition) {
        return message;
    }
  }

  return (
    <div>
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
                    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                      <div className="form-tags">
                        <label>
                          Email address
                          <span>*</span>
                        </label>
                        <input placeholder="Enter your email address..." {...register('email', {
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
                        <input placeholder="Enter your password.." {...register('password', {
                        required: true
                      })}/>
                      <div className="text-danger font-weight-bold small">
                        {validateMessage(errors?.password?.type === "required", "Please Enter Password")}
                      </div>
                      </div>
                      <div className='remember-lost'>
                        <h5 className='checkbox-save'><Checkbox {...label} />Remember Me</h5>
                        <Link href={'/my-account/lost-password'}><p className="lost-password-line">Lost your password?</p></Link>
                      </div>
                      <button type='submit'>REGISTER</button>
                      </form>
              </div>
              <LostPasswordForm/>
      </div>
    </div>
  )
}

export default MyAccount