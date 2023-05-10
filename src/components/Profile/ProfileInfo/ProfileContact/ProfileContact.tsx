import React from 'react';
import s from './ProfileContact.module.css'


type ProfileContactPropsType = {
  contactTitle: string
  contactValue: any
}


export function ProfileContact({contactTitle, contactValue, ...props}: ProfileContactPropsType) {
  return (
    <div className={s.profileContact}>
      <strong>{contactTitle}: </strong>
      {contactTitle}
    </div>
  )
}