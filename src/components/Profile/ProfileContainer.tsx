import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {addPost, ProfilePageType, getProfile, getStatus, changeStatus} from '../../redux/profile-reducer';
import {AppStateType, ThunkType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type MapStatePropsType = ProfilePageType & {
  id: number | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  addPost: () => void
  getProfile: (userId: string) => void
  getStatus: (userId: string) => void
  changeStatus: (status: string) => ThunkType
}
type PathParamsType = {
  userId: string
}
type ProfilePropsType = MapStatePropsType &
  MapDispatchPropsType &
  RouteComponentProps<PathParamsType>


class ProfileAPIContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId && this.props.id) {
      userId = this.props.id.toString()
    }

    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.auth.id,
  isAuth: state.auth.isAuth
})

export const ProfileContainer = compose<React.ComponentType>(
  WithAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    addPost,
    getProfile,
    getStatus,
    changeStatus
  })
)(ProfileAPIContainer)
