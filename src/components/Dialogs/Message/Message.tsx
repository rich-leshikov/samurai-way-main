import React from 'react';
import s from '../Dialogs.module.css';

type MessagePropsType = {
  id: string,
  message: string
}

export function Message(props: MessagePropsType) {
  return (
    <div className={s.message}>{props.message}</div>
  );
}