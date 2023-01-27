import React from 'react';
import {addPostAC, updatePostTextareaAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {Store} from 'redux';
import {RootStateType} from '../../../redux/store';

type MyPostsPropsType = {
  store: Store
}

export function MyPostsContainer(props: MyPostsPropsType) {
  let state: RootStateType = props.store.getState()
  console.log(state,"state")

  const updatePost = (post: string) => {
    props.store.dispatch(updatePostTextareaAC(post))
  }

  const addPost = () => props.store.dispatch(addPostAC())

  return (
    <MyPosts
      postsData={state.profilePage.posts}
      newPostFromTextarea={state.profilePage.newPostFromTextarea}
      updatePost={updatePost}
      addPost={addPost}
    />
  );
}