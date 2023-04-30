import React, {ChangeEvent, useState} from 'react';
import s from './ProfileStatus.module.css'
import {ThunkType} from '../../../../redux/redux-store';


type ProfileStatusPropsType = {
  status: string
  changeStatus: (status: string) => ThunkType
}
// type ProfileStatusStateType = {
//   editMode: boolean
//   status: string
// }


export const ProfileStatus = (props: ProfileStatusPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, changeStatus] = useState<string>(props.status)

  const activateEditMode = () => setEditMode(true)
  const deactivateEditMode = () => {
    setEditMode(false)
    props.changeStatus(status)
  }
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => changeStatus(e.currentTarget.value)

  // const componentDidUpdate = (prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>, snapshot ?: any) => {
  //   if (prevProps.status !== props.status) {
  //     changeStatus(props.status)
  //   }
  // }

  return (
    <div className={s.profileStatus}>
      {
        !editMode && <p onDoubleClick={activateEditMode}>{status}</p>
      }
      {
        editMode &&
        <input
          autoFocus={true}
          onChange={(e) => onStatusChange(e)}
          onBlur={deactivateEditMode}
          value={status}
        />
      }
    </div>
  )
}