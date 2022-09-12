import React from 'react'
import './Register.css'
import avatar from '../../assets/char_avatar.png'

const Register = () => {
  return (
    <div>
        <h3>Character Sheet</h3>
        <div className='character-avatar'>
            <img alt='' src={avatar}/>
        </div>
        <text>Name: </text><input></input>
        <br></br>
        <text>Age: </text><input></input>
        <br></br>
        <text>Email: </text><input></input>
        <br></br>
        <text>Region: </text><input></input>
        <br></br>
        <a href='profile'>Done</a>
    </div>
  )
}

export default Register