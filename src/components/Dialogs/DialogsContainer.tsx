import React from 'react';
import {connect} from 'react-redux';
import {addMessageAC, updateMessageTextareaAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {AppRootStateType} from '../../redux/redux-store';

type DialogsPropsType = {}

const mapStateToProps = (state: AppRootStateType) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateMessage: (message: string) => {
      dispatch(updateMessageTextareaAC(message))
    },
    addMessage: () => dispatch(addMessageAC())
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)