import React from 'react';
import {addPostAC, updatePostTextareaAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {RootStateType} from '../../../redux/store';
import {StoreContext} from '../../../StoreContext';

type MyPostsPropsType = {}

export function MyPostsContainer(props: MyPostsPropsType) {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let state: RootStateType = store.getState()
          console.log(state, 'state')

          const updatePost = (post: string) => {
            store.dispatch(updatePostTextareaAC(post))
          }

          const addPost = () => store.dispatch(addPostAC())

          return <MyPosts
            postsData={state.profilePage.posts}
            newPostFromTextarea={state.profilePage.newPostFromTextarea}
            updatePost={updatePost}
            addPost={addPost}
          />
        }
      }
    </StoreContext.Consumer>
  );
}