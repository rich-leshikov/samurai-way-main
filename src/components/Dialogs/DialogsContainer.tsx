import React from 'react';
import {connect} from 'react-redux';
import {addMessage, DialogsPageType, updateMessageTextarea} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../redux/redux-store';
import {WithAuthReducer} from '../../hoc/withAuthReducer';


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


export const DialogsContainer = WithAuthReducer(connect(mapStateToProps, {
  updateMessageTextarea,
  addMessage
})(Dialogs))