import React from 'react';
import './Login.css';

export function Login()  {
  return (
    <div className='container'>
    <div className='loginbox'>
        <img src={require('../Photos/png.jpg')} />
        <h1>Login Here</h1>
        <form >
        <p>Username</p>
            <input type="text" name="" placeholder="Enter Username"/>
        <p>Password</p>
            <input type={"password"} name="" placeholder='Enter Password'/>
            <input type="submit" name="" value="Login"/>
        </form>
    </div>
    </div>
  )
}