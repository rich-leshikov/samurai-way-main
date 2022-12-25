import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
  id: string,
  name: string
}

export function Dialog(props: DialogPropsType) {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  );
}