import React from 'react'
import './Login.css'
import avatar from '../../assets/char_avatar.png'

const Login = () => {
  return (
    <div>
        <h3>Hello Adventurer</h3>
        <div className='character-avatar'>
            <img alt='' src={avatar}/>
        </div>
        <text>User: </text><input/>
        <br/>
        <text>Pass: </text><input type='password'/>
        <br/>
        <a href='register'>New Account</a>
        <a href='profile'>Login</a>
    </div>
  )
}

export default Login
