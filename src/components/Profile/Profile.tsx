import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsDataType} from '../../App';

type ProfilePropsType = {
  postsData: Array<PostsDataType>,
}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts postsData={props.postsData}/>
    </div>
  );
}