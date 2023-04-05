import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import axios from 'axios';
import {AppRootStateType} from '../../redux/redux-store';
import {AuthType, DataAuthType, setAuthUserData} from '../../redux/auth-reducer';

type MapStatePropsType = AuthType
type MapDispatchPropsType = {
  setAuthUserData: (data: DataAuthType) => void
}
type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderAPI extends React.Component<HeaderPropsType> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          // let {id, email, login} = response.data.data
          this.props.setAuthUserData(response.data.data)
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
  {setAuthUserData})(HeaderAPI)