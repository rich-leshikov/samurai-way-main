import React from 'react';
import s from './LoginPage.module.css'
import {FormDataType, LoginReduxForm} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';

type MapStatePropsType = {
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginPropsType = MapStatePropsType & MapDispatchPropsType


function Login(props: LoginPropsType) {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
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


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth
})


export const LoginPage = connect(mapStateToProps, {login})(Login)