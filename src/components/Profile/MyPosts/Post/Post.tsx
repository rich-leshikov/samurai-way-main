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
      {/*<img className={s.avatar} src={require("../../../../assets/img/doomer.jpg")} alt='doomer'/>*/}
      <img className={s.avatar} src={props.profile.photos.small ?
        props.profile.photos.small : require("../../../../assets/img/doomer.jpg")} alt='doomer'/>
      <p>{props.message}</p>
      <div className="">
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
}