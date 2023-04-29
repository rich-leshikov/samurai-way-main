import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ThunkType} from '../../../redux/redux-store';

type ProfileInfoPropsType = {
  profile: any
  status: string
  changeStatus: (status: string) => ThunkType
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
            props.profile.photos.small : require('../../../assets/img/no_data_avatar.png')}/>
        </div>
        <div className={s.profile__description__info}>
          <h4>Thinking about</h4>
          <ProfileStatus
            status={props.status}
            changeStatus={props.changeStatus}
          />
        </div>
      </div>
    </div>
  )
}