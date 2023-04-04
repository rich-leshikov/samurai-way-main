import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfilePageType} from '../../redux/profile-reducer';
import {Preloader} from '../EmbeddedModules/Preloader/Preloader';

type ProfilePropsType = ProfilePageType & {
  updatePostTextarea: (post: string) => void
  addPost: () => void
}

export function Profile(props: ProfilePropsType) {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile}/>
      <MyPosts
        profile={props.profile}
        posts={props.posts}
        newPostFromTextarea={props.newPostFromTextarea}
        updatePostTextarea={props.updatePostTextarea}
        addPost={props.addPost}
      />
    </div>
  )
}