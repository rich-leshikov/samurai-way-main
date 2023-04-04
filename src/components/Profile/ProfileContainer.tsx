import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {ProfilePageType, updatePostTextarea, addPost, setUserProfile} from '../../redux/profile-reducer';
import {AppRootStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

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

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  newPostFromTextarea: state.profilePage.newPostFromTextarea,
  posts: state.profilePage.posts,
  profile: state.profilePage.profile
})

class ProfileAPI extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}

const ProfileAPIWithRouter = withRouter(ProfileAPI)

export const ProfileContainer =
  connect(mapStateToProps, {updatePostTextarea, addPost, setUserProfile})(ProfileAPIWithRouter)