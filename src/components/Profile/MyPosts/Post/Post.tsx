import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
  message: string
  likesCount: number
  profile: any
}

export function Post(props: PostPropsType) {
  return (
    <div className={s.profile__post}>
      <img className={s.avatar} src={props.profile.photos.small ?
        props.profile.photos.small : require("../../../../assets/img/no_data_avatar.png")} alt='no_data'/>
      <p>{props.message}</p>
      <div className="">
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
}