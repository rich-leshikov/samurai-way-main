import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {MessageDataType, MessageReduxForm} from '../common/MessageForm/MessageForm';
import {DialogsPropsType} from './DialogsContainer';


export function Dialogs(props: DialogsPropsType) {
  const addMessage = (formData: MessageDataType) => {
    props.addMessage(formData.message)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {
          props.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)
        }
      </div>
      <div className={s.dialogs__chats}>
        {
          props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)
        }
        <MessageReduxForm onSubmit={addMessage}/>
      </div>
    </div>
  )
}