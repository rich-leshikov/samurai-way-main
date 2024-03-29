import React from 'react';
import {connect} from 'react-redux';
import {addMessage, DialogsPageType} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../redux/redux-store';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type MapStatePropsType = DialogsPageType
type MapDispatchPropsType = {
  addMessage: (message: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}


export const DialogsContainer = compose<React.ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, {
    addMessage
  })
)(Dialogs)