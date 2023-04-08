import React from 'react';
import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {MessageForm} from '../EmbeddedModules/MessageForm/MessageForm';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';


export function Dialogs(props: DialogsPropsType) {
  const updateMessage = (message: string) => {
    props.updateMessageTextarea(message)
  }
  const addMessage = () => props.addMessage()

  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
  }

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
  )
}