import React from 'react';
import s from './MessageForm.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, minLength} from '../../../utils/validators';
import {Textarea} from '../FormControls/FormControls';


export type MessageDataType = {
  message: string
}


const maxLength140 = maxLengthCreator(140)


function MessageForm(props: InjectedFormProps<MessageDataType>) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.messageForm__textarea}>
        <Field
          type='message'
          placeholder={'your message...'}
          component={Textarea}
          name={'message'}
          validate={[minLength, maxLength140]}
        />
      </div>
      <div className={s.messageForm__button}>
        <button>Send</button>
      </div>
    </form>
  )
}


export const MessageReduxForm = reduxForm<MessageDataType>({form: 'message'})(MessageForm)