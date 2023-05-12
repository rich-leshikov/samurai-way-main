import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {ThunkType} from '../../../redux/redux-store';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfileDataFormReduxForm} from './ProfileDataForm/ProfileDataForm';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileType} from '../../../redux/profile-reducer';

type ProfileInfoPropsType = {
  profile: ProfileType
  fullName: string
  status: string
  isOwner: boolean
  changeStatus: (status: string) => ThunkType
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => void
}

export function ProfileInfo({profile, ...props}: ProfileInfoPropsType) {
  const [editMode, setEditMode] = useState<boolean>(false)

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      props.savePhoto(e.target.files[0])
    }
  }
  const onSubmit = (formData: ProfileType) => {
    props.saveProfile(formData)
    setEditMode(false)
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.profile__description}>
        <div className={s.profile__description__avatar}>
          <img src={profile.photos.small ?
            profile.photos.small :
            require('../../../assets/img/no_data_avatar.png')} alt={'avatar'}/>
          {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        </div>
        <div className={s.profile__description__info}>
          <h2>{props.fullName}</h2>
          <div className={s.profile__description__info__status}>
            <strong>Thinking about: </strong>
            <ProfileStatus
              status={props.status}
              changeStatus={props.changeStatus}
            />
          </div>
          {
            editMode
              ? <ProfileDataFormReduxForm
                initialValues={profile}
                profile={profile}
                onSubmit={onSubmit}
              />
              : <ProfileData
                profile={profile}
                isOwner={true}
                editMode={editMode}
                setEditMode={() => setEditMode(true)}
              />
          }
        </div>
      </div>
    </div>
  )
}