import React from 'react'
import { Form } from './Form';
import './form.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-header'>Contact Us</div>

      <div className='contact-content'>
        <div className='contain-text'>

            Ready to embark on your data-driven journey?
            Get in touch with us today to discuss your data challenges and explore
            how DataTech Innovations can help you unlock the true potential of your data.

        </div>
        <div className='main-form'>
          <Form />
        </div>
      </div>

    </div>
  )
}
