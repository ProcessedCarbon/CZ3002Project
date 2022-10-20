import React from 'react'
import './Login.css'
import { Form, Field } from "react-final-form";
import PlayerAvatar from '../PlayerAvatar'
const Login = () => {

  function registerBtnClick(e) {
    window.location.href = 'register'
  }

  function loginBtnClick(values) {
    //TODO: backend logic
    window.location.href = 'profile'
  }

  return (
    <div className='login-background'>
      <div className='box'>
        <h3>Hello Adventurer,</h3>
        <div>
          <Form
            onSubmit={loginBtnClick}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="login-form">
                  <Field name="username" validate={value => value ? undefined : "Required"}>
                    {({ input, meta }) => (
                      <div>
                        <label>Username :</label>
                        <input {...input} type="text" />
                        {meta.error && meta.touched && <span style={{ color: "red" }}> {meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="password" validate={value => value ? undefined : "Required"}>
                    {({ input, meta }) => (
                      <div>
                        <label>Password :</label>
                        <input {...input} type="text" />
                        {meta.error && meta.touched && <span style={{ color: "red" }}> {meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
                <br />
                <div className='auth-btn-group'>
                  <button type="submit" className='btn' disabled={submitting}>
                    <h5>Login</h5>
                  </button>
                  <button className='btn' onClick={registerBtnClick}>
                    <h5>New Account</h5>
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
      <div className='auth-character-avatar'>
        <PlayerAvatar />
      </div>
    </div>

  );
}

export default Login
