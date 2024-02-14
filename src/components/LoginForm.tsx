import React from 'react'
import Button from './Button'
import "../styles/LoginForm.css";

const LoginForm = () => {
  return (
    <>
    <div className='wrapper'>
    <div>
    <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" 
            placeholder='Username' required/>
        </div>
        <div className="input-box">
            <input type="password" 
            placeholder='Password' required/>
        </div>
        <div className="remember-forgot">
            <label><input type="checkbox" 
            placeholder='checkbox' />Remember Me</label>
            <a href="#">Forgot Password</a>
        </div>
        <Button type="submit" color="primary" onClick={() => console.log("Clicked")}>
            Login
        </Button>
    </form>
</div>
</div>
</>
)
}

export default LoginForm