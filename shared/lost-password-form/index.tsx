import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import regexContants from '@/config/regexConstants/regexContants';

type FormValues = {
  phone_number: string;
};

const LostPasswordForm = () => {
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

  return (
    <div>
      <div className='otp-form'>
              <div className="sign-in-otp">
                      <h4>LOGIN OR SIGN-UP</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                      <div className="form-tags">
                        <label>
                          Phone Number
                          <span>*</span>
                        </label>
                        <input placeholder="Enter your phone number..." {...register('phone_number', {
                        required: true, pattern: regexContants.MOBILE,
                      })}/>
                      <div className="text-danger font-weight-bold small">
                        {validateMessage(errors?.phone_number?.type === "required", "Please Enter Phone Number")}
                        {validateMessage(errors?.phone_number?.type === "pattern", "Please Enter Valid Phone Number")}
                      </div>
                      </div>
                      <p>
                        An OTP will be sent to your phone number.
                      </p>
                      <p>
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                      </p>
                      <button type='submit'> GET OTP</button>
                      </form>
              </div>
    </div>
  )
}

export default LostPasswordForm