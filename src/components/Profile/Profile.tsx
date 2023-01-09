import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../state/state';

type ProfilePropsType = {
  posts: Array<PostsType>,
  addPost: (message: string) => void,
}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts
        postsData={props.posts}
        addPost={props.addPost}
      />
    </div>
  );
}