import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/store';
import {MessageForm} from '../EmbeddedModules/MessageForm';

type DialogsPropsType = {
  dialogsPage: DialogsPageType,
  updateMessage: (message: string) => void,
  addMessage: () => void,
}

export function Dialogs(props: DialogsPropsType) {
  const updateMessage = (message: string) => {
    props.updateMessage(message)
  }

  const addMessage = () => props.addMessage()

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {
          props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)
        }
      </div>
      <div className={s.dialogs__chats}>
        {
          props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)
        }
        <MessageForm
          newMessageFromTextarea={props.dialogsPage.newMessageFromTextarea}
          updateTextarea={updateMessage}
          addMessage={addMessage}
        />
      </div>
    </div>
  );
}