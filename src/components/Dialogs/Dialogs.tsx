import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {ActionsType, DialogsType, MessagesType} from '../../redux/store';
import {MessageForm} from '../EmbeddedModules/MessageForm';
import {addMessageAC, updateMessageTextareaAC} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>,
  newMessageFromTextarea: string,
  dispatch: (action: ActionsType) => void,
}

export function Dialogs(props: DialogsPropsType) {
  const updateMessage = (message: string) => {
    props.dispatch(updateMessageTextareaAC(message))
  }

  const addMessage = () => props.dispatch(addMessageAC())

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
        <MessageForm
          newMessageFromTextarea={props.newMessageFromTextarea}
          updateTextarea={updateMessage}
          addMessage={addMessage}
        />
      </div>
    </div>
  );
}