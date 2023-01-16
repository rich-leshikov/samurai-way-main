import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, PostsType} from '../../redux/store';

type ProfilePropsType = {
  posts: Array<PostsType>,
  newPostFromTextarea: string,
  dispatch: (action: ActionsType) => void,
}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts
        postsData={props.posts}
        newPostFromTextarea={props.newPostFromTextarea}
        dispatch={props.dispatch}
      />
    </div>
  );
}