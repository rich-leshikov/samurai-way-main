import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfilePageType} from '../../redux/profile-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import {ThunkType} from '../../redux/redux-store';


type ProfilePropsType = ProfilePageType & {
  isOwner: boolean
  addPost: (postText: string) => void
  changeStatus: (status: string) => ThunkType
  savePhoto: (file: any) => void
}


export function Profile(props: ProfilePropsType) {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        isOwner={props.isOwner}
        changeStatus={props.changeStatus}
        savePhoto={props.savePhoto}
      />
      <MyPosts
        profile={props.profile}
        posts={props.posts}
        addPost={props.addPost}
      />
    </div>
  )
}