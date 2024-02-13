import React from 'react'
import Button from './Button';
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <>
        
        <form className="contactForm"
        action="">
        <h1>Send Email</h1>
        <div className="input-box">
            <input type="email" 
            placeholder='Email' required/>
        </div>
        <div className="input-box">
            <input type="text" 
            placeholder='Message' required/>
        </div>
        <Button type="submit" color="primary" onClick={() => console.log("Clicked")}>
            Send
        </Button>
        </form>

    </>
  )
}

export default ContactForm