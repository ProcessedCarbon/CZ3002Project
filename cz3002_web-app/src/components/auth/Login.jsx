import React from 'react'
import './Login.css'
import avatar from '../../assets/char_avatar.png'
import { Form, Field } from "react-final-form";

const Login = () => {

  function registerBtnClick(e){
    window.location.href = 'register'
  }
  
  function loginBtnClick(values){
    //TODO: backend logic
    window.location.href='profile'
  }

  return (
    <div>
      <h3>Hello Adventurer</h3>
      <div className='character-avatar'>
          <img alt='' src={avatar}/>
      </div>
      <div>
        <Form
          onSubmit={loginBtnClick}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field name="username" validate={value => value ? undefined : "Required"}>
                  {({ input, meta }) => (
                    <div>
                      <label>Username</label>
                      <input {...input} type="text" />
                      {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="password" validate={value => value ? undefined : "Required"}>
                  {({ input, meta }) => (
                    <div>
                      <label>Password</label>
                      <input {...input} type="text" />
                      {meta.error && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <button type="submit" className='btn' disabled={submitting}>Login</button>
            </form>
          )}
        />
        <button className='btn' onClick={registerBtnClick}>New Account</button>
      </div>
    </div>
  );
}

export default Login
