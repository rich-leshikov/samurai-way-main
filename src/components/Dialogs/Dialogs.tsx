import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';

type DialogsDataType = {
  id: string,
  name: string
}

type MessagesDataType = {
  id: string,
  message: string
}

type DialogsPropsType = {}

export function Dialogs(props: DialogsPropsType) {
  const dialogsData: Array<DialogsDataType> = [
    {id: '1', name: 'Dimych'},
    {id: '2', name: 'Victor'},
    {id: '3', name: 'Andrey'},
    {id: '4', name: 'Sasha'},
    {id: '5', name: 'Sveta'},
    {id: '6', name: 'Valera'},
    {id: '7', name: 'Igor'},
  ]

  const messagesData: Array<MessagesDataType> = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'What\'s good?'},
    {id: '3', message: 'Yo!'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {
          dialogsData.map(d => <Dialog id={d.id} name={d.name}/>)
        }
      </div>
      <div className={s.dialogs__chats}>
        {
          messagesData.map(m => <Message id={m.id} message={m.message}/>)
        }
      </div>
    </div>
  );
}