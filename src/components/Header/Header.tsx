import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {AuthType} from '../../redux/auth-reducer';
import { HeaderPropsType } from './HeaderContainer';


export function Header(props: HeaderPropsType) {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <img src={require('../../assets/img/logo192.png')} alt="favicon"/>

        <div className={s.loginBlock}>
          {
            props.isAuth ?
              <div className={s.loginBlock__login}>
                <span>{props.login} </span>
                <button onClick={props.logout}>Log Out</button>
              </div> :
              <NavLink to={'/login'}>Log In</NavLink>
          }
        </div>
      </div>
    </header>
  )
}