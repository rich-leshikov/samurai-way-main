import React from 'react';
import s from './LoginPage.module.css'
import {LoginReduxForm} from './LoginForm/LoginForm';


type LoginPropsType = {

}
export type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}


export function LoginPage(props: LoginPropsType) {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }

  return (
    <div className={s.login}>
      <div className={s.login__wallpaper}>
        <img src={require('../../assets/img/moria.jpg')} alt="main-img"/>
      </div>
      <p>Ennyn Durin Aran Moria: pedo mellon a minno.</p>
      <p>Im Narvi hain echant: Celebrimbor o Eregion teithant i thiw hin.</p>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}