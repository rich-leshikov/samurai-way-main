import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

type ProfilePropsType = {}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.profile}>
      <Profile/>
      <MyPosts/>
    </div>
  );
}