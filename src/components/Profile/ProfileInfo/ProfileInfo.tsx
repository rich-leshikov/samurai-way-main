import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {}

export function ProfileInfo(props: ProfileInfoPropsType) {
  return (
    <div className={s.profileInfo}>
      <div className={s.profile__image}>
        <img src={require('./../../../img/venice.jpg')} alt="main-img"/>
      </div>
      <div className={'profile__description'}>
        avatar + desc
      </div>
    </div>
  );
}