import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {ActionsType, DialogsType, MessagesType} from '../../redux/store';
import {MessageForm} from '../EmbeddedModules/MessageForm';

type DialogsPropsType = {
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>,
  newMessageFromTextarea: string,
  dispatch: (action: ActionsType) => void,
}

export function Dialogs(props: DialogsPropsType) {
  const updateMessage = (message: string) => {
    props.dispatch({type: 'UPDATE-TEXTAREA', newText: message})
  }

  const addMessage = () => props.dispatch({type: "ADD-MESSAGE"})

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
          updateTextarea={updateMessage}
          addMessage={addMessage}
        />
      </div>
    </div>
  );
}