import React from 'react';
import './Login.css';
import { Form, Field } from 'react-final-form';
import AxiosInterface from '../Misc/AxiosInterface';
import PlayerAvatar from '../PlayerAvatar'

const axiosInterface = new AxiosInterface();

const Login = () => {
  function registerBtnClick(e) {
    window.location.href = 'register';
  }

  async function loginBtnClick(values) {
    console.log('values', values);
    //TODO: backend logic
    const userFields = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axiosInterface.postData('/user/login', userFields);
      const auth_token = response.headers.auth_token;
      localStorage.setItem('auth_token', auth_token);
      window.location.href = 'profile';
      //console.log(auth_token);
    } catch (error) {
      //fail login user
      //Do error handling on FE
      console.log(error);
    }
  }

  return (
    <div className='login-background'>
      <div className='box'>
        <h3>Hello Adventurer</h3>
        <Form
          onSubmit={loginBtnClick}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className="authform login-form">
              <div>
                <Field name="email" validate={(value) => (value ? undefined : 'Required')}>
                  {({ input, meta }) => (
                    <div>
                      <label>Email</label>
                      <input {...input} type="text" />
                      {meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="password" validate={(value) => (value ? undefined : 'Required')}>
                  {({ input, meta }) => (
                    <div>
                      <label>Password</label>
                      <input {...input} type="text" />
                      {meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <div className='auth-btn-group'>
                <button type="submit" className="btn" disabled={submitting}>
                  <h5>Login</h5>
                </button>
                <button className="btn" onClick={registerBtnClick}>
                  <h5>New Account</h5>
                </button>
              </div>

            </form>
          )}
        />

      </div>
      <div className="auth-character-avatar">
        <PlayerAvatar />
      </div>
    </div>

  );
};

export default Login;
