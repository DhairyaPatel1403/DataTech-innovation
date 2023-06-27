import React from 'react'
import { Form } from './Form';
import './form.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-header'>Contact Us</div>

      <div className='contact-content'>
        <div className='contain-text'>

        If you are looking for a partner who can help you unleash the power of data, then we encourage you to contact us today. We would be happy to discuss your needs and how we can help you achieve your goals.

        </div>
        <div className='main-form'>
          <Form />
        </div>
      </div>

    </div>
  )
}
