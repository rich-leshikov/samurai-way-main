import React from 'react';
import {connect} from 'react-redux';
import {addMessageAC, DialogsPageType, updateMessageTextareaAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {AppRootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = DialogsPageType
type MapDispatchPropsType = {
  updateMessage: (message: string) => void
  addMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    newMessageFromTextarea: state.dialogsPage.newMessageFromTextarea,
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateMessage: (message: string) => dispatch(updateMessageTextareaAC(message)),
    addMessage: () => dispatch(addMessageAC())
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)