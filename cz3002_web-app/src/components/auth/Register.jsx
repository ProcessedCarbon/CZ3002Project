import React from 'react'
import './Register.css'
import avatar from '../../assets/char_avatar.png'
import AxiosInterface from '../Misc/AxiosInterface'
import { Form, Field } from "react-final-form";

const a_interface = new AxiosInterface();

function onBtnClick(){
  //TODO: backend logic
  window.location.href='profile'
}

const Register = () => {
  return (
    <div>
      <h3>Character Sheet</h3>
        <div className='character-avatar'>
            <img alt='' src={avatar}/>
        </div>
      <Form
        onSubmit={onBtnClick}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="username" validate={value => value ? (value.match(/^[a-zA-Z]+$/) ? undefined : 'Only letters allowed') : "Required"}>
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input {...input} type="text" placeholder='Username' />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="age" validate={value => value ? (value < 0 || value > 200 ? 'Invalid' : undefined) : "Required"}>
                {({ input, meta }) => (
                  <div>
                    <label>Age</label>
                    <input {...input} type="number" placeholder='Age' />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="email" validate={value => value ? undefined : "Required"}>
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input {...input} type="text" placeholder='Email' />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="region" validate={value => value ? undefined : "Required"}>
                {({ input, meta }) => (
                  <div>
                    <label>Region</label>
                    <input {...input} type="text" placeholder='Region' />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password" validate={value => value ? (value.length < 8 ? 'Must be at least 8 characters long' : undefined) : "Required"}>
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} type="password" placeholder='Password' />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <button type="submit" className='btn'>Done</button>
          </form>
        )}
      />
    </div>
  )
}
/*
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
*/
export default Register