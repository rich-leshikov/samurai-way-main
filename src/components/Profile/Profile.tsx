import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {Store} from 'redux';

type ProfilePropsType = {
  store: Store
}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}