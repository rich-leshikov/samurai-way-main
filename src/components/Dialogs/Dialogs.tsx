import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../state/state';
import {MessageForm} from '../EmbeddedModules/MessageForm';

type DialogsPropsType = {
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>,
  newMessageFromTextarea: string,
  updateTextarea: (message: string) => void,
  addMessage: () => void,
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
        {/*  Add dialogs and avatars for every user */}
        <MessageForm
          newMessageFromTextarea={props.newMessageFromTextarea}
          updateTextarea={props.updateTextarea}
          addMessage={props.addMessage}
        />
      </div>
    </div>
  );
}