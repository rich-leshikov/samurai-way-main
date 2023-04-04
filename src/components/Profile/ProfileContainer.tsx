import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {ProfilePageType, updatePostTextarea, addPost, setUserProfile} from '../../redux/profile-reducer';
import {AppRootStateType} from '../../redux/redux-store';

type MapStatePropsType = ProfilePageType
type MapDispatchPropsType = {
  updatePostTextarea: (post: string) => void
  addPost: () => void
  setUserProfile: (profile: any) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  newPostFromTextarea: state.profilePage.newPostFromTextarea,
  posts: state.profilePage.posts,
  profile: state.profilePage.profile
})

class ProfileAPI extends React.Component<ProfilePropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile
        newPostFromTextarea={this.props.newPostFromTextarea}
        posts={this.props.posts}
        profile={this.props.profile}
        updatePostTextarea={this.props.updatePostTextarea}
        addPost={this.props.addPost}
      />
    )
  }
}

export const ProfileContainer = connect(mapStateToProps, {updatePostTextarea, addPost, setUserProfile})(ProfileAPI)