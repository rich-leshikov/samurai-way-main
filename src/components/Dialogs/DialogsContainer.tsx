import React from 'react';
import {connect} from 'react-redux';
import {DialogsPageType, updateMessageTextarea, addMessage} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = DialogsPageType
type MapDispatchPropsType = {
  updateMessageTextarea: (message: string) => void
  addMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    newMessageFromTextarea: state.dialogsPage.newMessageFromTextarea,
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//   return {
//     updateMessage: (message: string) => dispatch(updateMessageTextarea(message)),
//     addMessage: () => dispatch(addMessage())
//   }
// }

export const DialogsContainer = connect(mapStateToProps, {updateMessageTextarea, addMessage})(Dialogs)