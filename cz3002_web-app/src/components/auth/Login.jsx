import React from 'react';
import './Login.css';
import avatar from '../../assets/char_avatar.png';
import { Form, Field } from 'react-final-form';
import AxiosInterface from '../Misc/AxiosInterface';
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
      window.location.href = 'profile';
      //console.log(auth_token);
      localStorage.setItem('auth_token', auth_token);
    } catch (error) {
      //fail login user
      //Do error handling on FE
      console.log(error);
    }
  }

  return (
    <div>
      <h3>Hello Adventurer</h3>
      <div className="character-avatar">
        <img alt="" src={avatar} />
      </div>
      <div>
        <Form
          onSubmit={loginBtnClick}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="btn" disabled={submitting}>
                Login
              </button>
            </form>
          )}
        />
        <button className="btn" onClick={registerBtnClick}>
          New Account
        </button>
      </div>
    </div>
  );
};

export default Login;
