import React from 'react'
import './Register.css'
import avatar from '../../assets/char_avatar.png'
import AxiosInterface from '../Misc/AxiosInterface'
import { Form, Field } from "react-final-form";

const a_interface = new AxiosInterface();

function onBtnClick(values){
  //TODO: backend logic
  window.location.href='profile'
}

const Register = () => {
  return (
    <div className='box'>
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
                    <label>Username </label>
                    <input {...input} type="text" />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="age" validate={value => value ? (value < 1 || value > 200 ? 'Invalid' : undefined) : "Required"}>
                {({ input, meta }) => (
                  <div>
                    <label>Age </label>
                    <input {...input} type="number" />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="email" validate={value => value ? (
                value.lastIndexOf('@') > 2 &&
                value.lastIndexOf('@') < value.lastIndexOf('.') && 
                value.lastIndexOf('.') > 2 && 
                value.length - value.lastIndexOf('.') > 2
                 ? undefined : 'Invalid') : "Required"}>
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input {...input} type="text" />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div>
                <label>Region</label>
                <Field name="region" component='select'>
                  <option value='SEA'>SEA</option>
                  <option value='US'>US</option>
                  <option value='EU'>EU</option>
                </Field>
              </div>
              <Field name="password" validate={value => value ? (value.length < 8 ? 'Must be at least 8 characters long' : undefined) : "Required"}>
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} type="password" />
                    {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <br/>
            <button type="submit" className='btn' disabled={submitting}>Register</button>
          </form>
        )}
      />
      <button className='btn' onClick={v => window.location.href = 'login'}>Login Instead</button>
    </div>
  )
}
export default Register