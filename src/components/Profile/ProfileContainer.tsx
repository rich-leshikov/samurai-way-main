import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {ProfilePageType, updatePostTextarea, addPost, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from '../../api/api';

type MapStatePropsType = ProfilePageType
type MapDispatchPropsType = {
  updatePostTextarea: (post: string) => void
  addPost: () => void
  setUserProfile: (profile: any) => void
}
type PathParamsType = {
  userId: string
}
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileAPIContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    profileAPI.getUserProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data)
      })
  }

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}

const ProfileAPIWithRouter = withRouter(ProfileAPIContainer)

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  newPostFromTextarea: state.profilePage.newPostFromTextarea,
  posts: state.profilePage.posts,
  profile: state.profilePage.profile
})

export const ProfileContainer =
  connect(mapStateToProps, {updatePostTextarea, addPost, setUserProfile})(ProfileAPIWithRouter)