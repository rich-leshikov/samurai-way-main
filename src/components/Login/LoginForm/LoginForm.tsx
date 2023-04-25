import React from 'react';
import s from './LoginForm.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../EmbeddedModules/FormControls/FormControls';
import {maxLengthCreator, required} from '../../../utils/validators';


export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}


const maxLength12 = maxLengthCreator(30)


function LoginForm(props: InjectedFormProps<FormDataType>) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.loginForm__login}>
        <Field
          type="login"
          placeholder={'Login'}
          component={Input}
          name={'email'}
          validate={[required, maxLength12]}
        />
      </div>
      <div className={s.loginForm__password}>
        <Field
          type="password"
          placeholder={'Password'}
          component={Input}
          name={'password'}
          validate={[required, maxLength12]}
        />
      </div>
      <div className={s.loginForm__rememberMe}>
        <Field
          type="checkbox"
          component={'input'}
          name={'rememberMe'}
        />
        <span>remember me</span>
      </div>
      <div className={s.loginForm__button}>
        <button>Login</button>
      </div>
    </form>
  )
}


export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)