import React from 'react';
import {addPostAC, ProfilePageType, updatePostTextareaAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = ProfilePageType
type MapDispatchPropsType = {
  updatePost: (post: string) => void
  addPost: () => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    newPostFromTextarea: state.profilePage.newPostFromTextarea,
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updatePost: (post: string) => dispatch(updatePostTextareaAC(post)),
    addPost: () => dispatch(addPostAC())
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)