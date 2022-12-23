import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'

type NavigationPropsType = {}

export function Navbar(props: NavigationPropsType) {
  return (
    <nav className={s.navigation}>
      <div className={`${s.nav__item} ${s.nav__feed} ${s.active}`}>
        <NavLink to={'feed'} activeClassName={s.active}>Feed</NavLink>
      </div>
      <div className={`${s.nav__item} ${s.nav__messages}`}>
        <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={`${s.nav__item} ${s.nav__music}`}>
        <NavLink to={'/audio'} activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={`${s.nav__item} ${s.nav__profile}`}>
        <NavLink to={'profile'} activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={`${s.nav__item} ${s.nav__settings}`}>
        <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  );
}