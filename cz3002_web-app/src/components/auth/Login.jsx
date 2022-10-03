import React from 'react'
import './Login.css'
import avatar from '../../assets/char_avatar.png'

var state = {
  inputs: {},
  errors: {},
};

function validateInputs(){
  let inputs = state.inputs
  let errors = {}
  
  if(typeof inputs['username'] == 'undefined'){
    errors['username'] = 'Required'
  }

  if(typeof inputs['password'] == 'undefined'){
    errors['password'] = 'Required'
  }

  state.errors = errors;

  console.log(errors)
  for(var i in errors) return false;//return false if not empty
  return true
}

function registerBtnClick(){
  window.location.href = 'register'
}

function loginBtnClick(){
  if(validateInputs()){
    //TODO: backend logic
    window.location.href='profile'
  }
}

function onInputChange(e){
  let inputs = state.inputs
  inputs[e.target.name] = e.target.value
  state = {inputs}
}

const Login = () => {
  return (
    <div>
        <h3>Hello Adventurer</h3>
        <div className='character-avatar'>
            <img alt='' src={avatar}/>
        </div>
        User: <input name='username' type="text" placeholder='Username' onChange={onInputChange} required />
        <br/>
        Pass: <input name='password' type='password' placeholder='Password' onChange={onInputChange} required/>
        <br/><br/>
        <button className='btn' onClick={registerBtnClick}>New Account</button>
        <button className='btn' onClick={loginBtnClick}>Login</button>
    </div>
  )
}

export default Login
