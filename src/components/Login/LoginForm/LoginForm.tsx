import React from 'react';
import s from './LoginForm.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormControls/FormControls';
import {maxLengthCreator, required} from '../../../utils/validators';


export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}
export type LoginFormPropsType = {
  captchaUrl: string | null
}


const maxLength12 = maxLengthCreator(30)


function LoginForm({
                     handleSubmit,
                     error,
                     captchaUrl
                   }: InjectedFormProps<FormDataType, LoginFormPropsType> & LoginFormPropsType) {
  return (
    <form onSubmit={handleSubmit}>
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
      {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
      {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, ' ', {})}
      {error && <div className={s.loginForm__summaryError}>{error}</div>}
      <div className={s.loginForm__button}>
        <button>Login</button>
      </div>
    </form>
  )
}


export const LoginReduxForm = reduxForm<FormDataType, LoginFormPropsType>({form: 'login'})(LoginForm)