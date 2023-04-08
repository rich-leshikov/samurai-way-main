import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AuthType, getAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';


type MapStatePropsType = AuthType
type MapDispatchPropsType = {
  // setAuthUserData: (data: DataAuthType) => void
  getUserData: () => void
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

    // authAPI.getAuthUserData()
    //   .then(data => {
    //     if (data.resultCode === 0) {
    //       this.props.setAuthUserData(data.data)
    //     }
    //   })
    this.props.getUserData()
  }

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


export const HeaderContainer = connect(mapStateToProps,
  {getUserData: getAuthUserData})(HeaderAPIContainer)