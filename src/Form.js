import React, {useEffect, useState } from 'react';
import './form.css'

export const Form = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling logic here
    console.log('Submitted:', { email, name, message });
    // Reset form fields
    setEmail('');
    setName('');
    setMessage('');
  };
    

  return (
    <div className='form'>
      <form>
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>Email</span>
    </div>
    <div class="inputbox">
      <textarea type="text" required="required"/>
      <span>Message</span>
    </div>
    <div class="inputbox">
      <button>Send</button>
    </div>
  </form>
    </div>
  )
}
