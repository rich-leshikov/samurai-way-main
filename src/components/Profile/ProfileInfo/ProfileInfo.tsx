import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileStatus} from './ProfileStatus/ProfileStatus';

type ProfileInfoPropsType = {
  profile: any
}

export function ProfileInfo(props: ProfileInfoPropsType) {
  return (
    <div className={s.profileInfo}>
      {/*<div className={s.profile__wallpaper}>*/}
      {/*  <img src={require('../../../assets/img/venice_rooftops.jpg')} alt="main-img"/>*/}
      {/*</div>*/}
      <div className={s.profile__description}>
        <div className={s.profile__description__avatar}>
          <img src={props.profile.photos.small ?
            props.profile.photos.small : require("../../../assets/img/doomer.jpg")}/>
        </div>
        <div className={s.profile__description__info}>
          <h3>About me</h3>
          <ProfileStatus aboutMe={props.profile.aboutMe}/>
        </div>
      </div>
    </div>
  )
}