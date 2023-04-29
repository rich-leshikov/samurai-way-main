import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AuthType, logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';


type MapStatePropsType = AuthType
type MapDispatchPropsType = {
  logout: () => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderAPIContainer extends React.Component<HeaderPropsType> {
  render() {
    return <Header {...this.props}/>
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth
})


export const HeaderContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {
    logout
  })
)(HeaderAPIContainer)