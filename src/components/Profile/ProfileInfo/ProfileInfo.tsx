import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css'
import {ThunkType} from '../../../redux/redux-store';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';

type ProfileInfoPropsType = {
  profile: any
  status: string
  isOwner: boolean
  changeStatus: (status: string) => ThunkType
  savePhoto: (file: any) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.profile__description}>
        <div className={s.profile__description__avatar}>
          <img src={props.profile.photos.small ?
            props.profile.photos.small :
            require('../../../assets/img/no_data_avatar.png')} alt={'avatar'}/>
          {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
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