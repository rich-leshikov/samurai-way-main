import React from 'react';
import s from './Navbar.module.css'

type NavigationPropsType = {

}

export function Navbar(props: NavigationPropsType) {
  return (
    <nav className={s.navigation}>
      <div className={`${s.nav__item} ${s.nav__feed}`}>
        <a>Feed</a>
      </div>
      <div className={`${s.nav__item} ${s.nav__messages}`}>
        <a href={'/dialogs'}>Messages</a>
      </div>
      <div className={`${s.nav__item} ${s.nav__music}`}>
        <a>Music</a>
      </div>
      <div className={`${s.nav__item} ${s.nav__profile}`}>
        <a href={'profile'}>Profile</a>
      </div>
      <div className={`${s.nav__item} ${s.nav__settings}`}>
        <a>Settings</a>
      </div>
    </nav>
  );
}