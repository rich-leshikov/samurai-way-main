import React from 'react';
import {Store} from 'redux';
import {addMessageAC, updateMessageTextareaAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
  store: Store
}

export function DialogsContainer(props: DialogsPropsType) {
  const updateMessage = (message: string) => {
    props.store.dispatch(updateMessageTextareaAC(message))
  }

  const addMessage = () => props.store.dispatch(addMessageAC())

  return (
    <Dialogs
      dialogsPage={props.store.getState().dialogsPage}
      updateMessage={updateMessage}
      addMessage={addMessage}
    />
  );
}