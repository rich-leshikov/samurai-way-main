import React from 'react';
import s from './Header.module.css'

type HeaderPropsType = {

}

export function Header(props: HeaderPropsType) {
  return (
    <header className={s.header}>
      <img src={require('../../img/logo192.png')} alt="favicon"/>
    </header>
  );
}