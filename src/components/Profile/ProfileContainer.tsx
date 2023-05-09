import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {addPost, ProfilePageType, getProfile, getStatus, changeStatus, savePhoto, getFullName} from '../../redux/profile-reducer';
import {AppStateType, ThunkType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type MapStatePropsType = ProfilePageType & {
  id: number | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  getProfile: (userId: string) => void
  getFullName: (userId: string) => void
  getStatus: (userId: string) => void
  addPost: () => void
  changeStatus: (status: string) => ThunkType
  savePhoto: (file: any) => void
}
type PathParamsType = {
  userId: string
}
type ProfilePropsType = MapStatePropsType &
  MapDispatchPropsType &
  RouteComponentProps<PathParamsType>


class ProfileAPIContainer extends React.Component<ProfilePropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId

    if (!userId && this.props.id) {
      userId = this.props.id.toString()
      if (!userId) {
        this.props.history.push('/login')
      }
    }

    this.props.getProfile(userId)
    this.props.getFullName(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
    console.log(this.props.match.params.userId)
    // debugger
    // if (prevProps.id && (this.props.match.params.userId !== prevProps.id.toString())) {
    //   this.refreshProfile()
    // }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        isOwner={!this.props.match.params.userId}
        addPost={this.props.addPost}
        changeStatus={this.props.changeStatus}
        savePhoto={this.props.savePhoto}
      />
    )
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.profile,
  fullName: state.profilePage.fullName,
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
    getFullName,
    changeStatus,
    savePhoto
  })
)(ProfileAPIContainer)
