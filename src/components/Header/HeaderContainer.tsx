import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import axios from 'axios';
import {AppRootStateType} from '../../redux/redux-store';
import {AuthType, DataAuthType, setAuthUserData} from '../../redux/auth-reducer';
import {headerAPI} from '../../api/api';


type MapStatePropsType = AuthType
type MapDispatchPropsType = {
  setAuthUserData: (data: DataAuthType) => void
}
type HeaderPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderAPIContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {
    // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
    //   withCredentials: true
    // })
    //   .then(response => {
    //     if (response.data.resultCode === 0) {
    //       this.props.setAuthUserData(response.data.data)
    //     }
    //   })
    headerAPI.getUserData()
      .then(data => {
        if (data.resultCode === 0) {
          this.props.setAuthUserData(data.data)
        }
      })
  }

  render() {
    return <Header {...this.props}/>
  }
}


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth
})


export const HeaderContainer = connect(mapStateToProps,
  {setAuthUserData})(HeaderAPIContainer)