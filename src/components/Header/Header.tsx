import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {AuthType} from '../../redux/auth-reducer';

type HeaderPropsType = AuthType

export function Header(props: HeaderPropsType) {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <img src={require('../../assets/img/logo192.png')} alt="favicon"/>

        <div className={s.loginBlock}>
          {
            props.isAuth ?
              <div className={s.loginBlock__login}>{props.login}</div> :
              <NavLink to={'/login'}>Log In</NavLink>
          }
        </div>
      </div>
    </header>
  )
}