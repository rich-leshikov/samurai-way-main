import React from 'react';
import s from './ProfileData.module.css'
import {ProfileContact} from '../ProfileContact/ProfileContact';


type ProfileDataPropsType = {
  profile: any
  isOwner: boolean
  editMode: boolean
  setEditMode: (isEditMode: boolean) => void
}


export function ProfileData({profile, isOwner, editMode, setEditMode, ...props}: ProfileDataPropsType) {
  return (
    <div className={s.profileData}>
      {
        isOwner &&
        <div>
          <button onClick={() => setEditMode(editMode)}>Edit profile</button>
        </div>
      }
      <div>
        <strong>Looking for a job: </strong>
        {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {
        profile.lookingForAJob &&
        <div>
          <strong>My professional skills:</strong>
          {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <strong>About me:</strong>
        {profile.aboutMe}
      </div>
      <div>
        <strong>Contacts:</strong>
        {
          Object.keys(profile.contacts).map(key => {
            return (
              <ProfileContact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            )
          })
        }
      </div>
    </div>
  )
}