import React from 'react';
import {connect} from 'react-redux';
import {DialogsPageType, updateMessageTextarea, addMessage} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStatePropsType = DialogsPageType & {
  isAuth: boolean
}
type MapDispatchPropsType = {
  updateMessageTextarea: (message: string) => void
  addMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    newMessageFromTextarea: state.dialogsPage.newMessageFromTextarea,
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    isAuth: state.auth.isAuth
  }
}


export const DialogsContainer = connect(mapStateToProps, {
  updateMessageTextarea,
  addMessage
})(Dialogs)