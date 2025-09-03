import React from 'react'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const BlogForm = () => {
  return (
    <div className='blog-form'>
        <div className='blog-form-heading'>
            <h5>LEAVE A REPLY</h5>
          </div>
          <div className='blog-form-content'>
            <h5>Your email address will not be published. Required fields are marked *</h5>
            <div className='inputs'>
              <input placeholder='Your Name*' type='text'/>
              <input placeholder='Email Address*' type='email'/>
              <input placeholder='Your Website' type='text'/>
            </div>
            <textarea id="my-textarea" placeholder='Comment' name="message" rows={4} cols={50}></textarea>
            <div>
              <h5 className='checkbox-save'><Checkbox {...label} />Save my name, email, and website in this browser for the next time I comment.</h5>
              <button>POST COMMENT</button>
            </div>
          </div>
    </div>
  )
}

export default BlogForm