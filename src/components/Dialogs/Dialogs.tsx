import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsDataType, MessagesDataType} from '../../App';

type DialogsPropsType = {
  dialogsData: Array<DialogsDataType>,
  messagesData: Array<MessagesDataType>,
}

export function Dialogs(props: DialogsPropsType) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {
          props.dialogsData.map(d => <Dialog id={d.id} name={d.name}/>)
        }
      </div>
      <div className={s.dialogs__chats}>
        {
          props.messagesData.map(m => <Message id={m.id} message={m.message}/>)
        }
      </div>
    </div>
  );
}