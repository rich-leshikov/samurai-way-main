import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {addPost, ProfilePageType, getProfile, getStatus, changeStatus} from '../../redux/profile-reducer';
import {AppStateType, ThunkType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthReducer} from '../../hoc/withAuthReducer';
import {compose} from 'redux';


type MapStatePropsType = ProfilePageType
type MapDispatchPropsType = {
  addPost: () => void
  getProfile: (profile: any) => void
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
    this.props.getProfile(this.props.match.params.userId)
    this.props.getStatus(this.props.match.params.userId)
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
  status: state.profilePage.status
})

export const ProfileContainer = compose<React.ComponentType>(
  WithAuthReducer,
  withRouter,
  connect(mapStateToProps, {
    addPost,
    getProfile,
    getStatus,
    changeStatus
  })
)(ProfileAPIContainer)
