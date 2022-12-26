import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../state/state';

type DialogsPropsType = {
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>,
}

export function Dialogs(props: DialogsPropsType) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {
          props.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)
        }
      </div>
      <div className={s.dialogs__chats}>
        {
          props.messages.map(m => <Message id={m.id} message={m.message}/>)
        }
      </div>
    </div>
  );
}