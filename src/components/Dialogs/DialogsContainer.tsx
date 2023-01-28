import React from 'react';
import {addMessageAC, updateMessageTextareaAC} from '../../redux/dialogs-reducer';
import {StoreContext} from '../../StoreContext';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {}

export function DialogsContainer(props: DialogsPropsType) {
  return (
    <StoreContext.Consumer>
      {
        store => {
          const updateMessage = (message: string) => {
            store.dispatch(updateMessageTextareaAC(message))
          }

          const addMessage = () => store.dispatch(addMessageAC())

          return <Dialogs
            dialogsPage={store.getState().dialogsPage}
            updateMessage={updateMessage}
            addMessage={addMessage}
          />
        }
      }
    </StoreContext.Consumer>
  );
}