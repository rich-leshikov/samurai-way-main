import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogsPropsType = {}

export function Dialogs(props: DialogsPropsType) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to={'/dialogs/1'} activeClassName={s.active}>Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'} activeClassName={s.active}>Victor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'} activeClassName={s.active}>Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'} activeClassName={s.active}>Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/5'} activeClassName={s.active}>Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/6'} activeClassName={s.active}>Valera</NavLink>
        </div>
      </div>
      <div className={s.dialogs__chats}>
        <div className={s.chat}>Hi!</div>
        <div className={s.chat}>What's good?</div>
        <div className={s.chat}>Yo!</div>
      </div>
    </div>
  );
}