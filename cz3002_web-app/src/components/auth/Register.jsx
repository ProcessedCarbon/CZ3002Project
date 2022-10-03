import React from 'react'
import './Register.css'
import avatar from '../../assets/char_avatar.png'

var state = {
  inputs: {},
  errors: {},
};

function validateInputs(){
  let inputs = state.inputs
  let errors = {}
  
  if(typeof inputs['name'] == 'undefined'){
    errors['name'] = 'Required'
  }else if(!inputs['name'].match(/^[a-zA-Z]+$/)){
    errors['name'] = 'Only letters allowed'
  }

  if(typeof inputs['age'] == 'undefined'){
    errors['age'] = 'Required'
  }else if(inputs['age'] < 0 || inputs['age'] > 200){
    errors['age'] = 'Invalid age'
  }

  if(typeof inputs['email'] == 'undefined'){
    errors['email'] = 'Required'
  }else{
    let lastAtPos = inputs['email'].lastIndexOf('@')
    let lastDotPos = inputs['email'].lastIndexOf('.')

    if(!(
      lastAtPos > 2 &&
      lastAtPos < lastDotPos &&
      lastDotPos > 2 &&
      inputs['email'].length - lastDotPos > 2
    )){
      errors['email'] = 'Invalid email'
    }
  }

  if(typeof inputs['region'] == 'undefined'){
    errors['region'] = 'Required'
    //TODO
  }

  if(typeof inputs['password'] == 'undefined'){
    errors['password'] = 'Required'
  }else if(inputs['password'].length < 8){
    errors['password'] = 'Must be at least 8 characters long'
    //TODO more validation
  }

  state.errors = errors;

  console.log(errors)
  for(var i in errors) return false;//return false if not empty
  return true
}

function onBtnClick(){
  var valid = validateInputs()
  //TODO: backend logic
  if(valid){
    window.location.href='profile'
  }
}

function onInputChange(e){
  let inputs = state.inputs
  inputs[e.target.name] = e.target.value
  state = {inputs}
  console.log(inputs)
}

const Register = () => {
  return (
    <div>
        <h3>Character Sheet</h3>
        <div className='character-avatar'>
            <img alt='' src={avatar}/>
        </div>
        Name: <input name='name' type='text' placeholder='Name' onChange={onInputChange} required />
        <span style={{ color: "red" }}>gg{state.inputs['name']}</span>
        <br/>
        Age: <input name='age' type='number' placeholder='Age' onChange={onInputChange} required/>
        <span style={{ color: "red" }}>gg{state.errors["age"]}</span>
        <br/>
        Email: <input name='email' type='text' placeholder='Email' onChange={onInputChange} required/>
        <span style={{ color: "red" }}>gg{state.errors["email"]}</span>
        <br/>
        Region: <input name='region' type='text' placeholder='Region' onChange={onInputChange} required/>
        <span style={{ color: "red" }}>gg{state.errors["region"]}</span>
        <br/>
        Password: <input name='password' type='password' placeholder='Password' onChange={onInputChange} required/>
        <span style={{ color: "red" }}>gg{state.errors["password"]}</span>
        <br/><br/>
        <button className='btn' onClick={onBtnClick} >Done</button>
    </div>
  )
}

export default Register