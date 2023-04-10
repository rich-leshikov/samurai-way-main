import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {addPost, getUserProfile, ProfilePageType, updatePostTextarea} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthReducer} from '../../hoc/withAuthReducer';


type MapStatePropsType = ProfilePageType
type MapDispatchPropsType = {
  updatePostTextarea: (post: string) => void
  addPost: () => void
  getUserProfile: (profile: any) => void
}
type PathParamsType = {
  userId: string
}
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>


class ProfileAPIContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId)
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


export const ProfileContainer = WithAuthReducer(connect(mapStateToProps, {
    updatePostTextarea,
    addPost,
    getUserProfile
  })(ProfileAPIWithRouter))