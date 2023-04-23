import React from 'react';
import s from './LoginForm.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormDataType} from '../LoginPage';


function LoginForm(props: InjectedFormProps<FormDataType>) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.loginForm__login}>
        <Field type="login" placeholder={'Login'} component={'input'} name={'login'}/>
      </div>
      <div className={s.loginForm__password}>
        <Field type="password" placeholder={'Password'} component={'input'} name={'password'}/>
      </div>
      <div className={s.loginForm__rememberMe}>
        <Field type="checkbox" component={'input'} name={'rememberMe'}/>
        <span>remember me</span>
      </div>
      <div className={s.loginForm__button}>
        <button>Login</button>
      </div>
    </form>
  )
}


export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)