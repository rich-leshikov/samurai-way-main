import React from 'react';
import {addPostAC, updatePostTextareaAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';

const mapStateToProps = (state: AppRootStateType) => {
  return {
    postsData: state.profilePage.posts,
    newPostFromTextarea: state.profilePage.newPostFromTextarea,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updatePost: (post: string) => {
      dispatch(updatePostTextareaAC(post))
    },
    addPost: () => dispatch(addPostAC())
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)