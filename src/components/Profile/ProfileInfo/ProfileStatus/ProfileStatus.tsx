import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'
import {ThunkType} from '../../../../redux/redux-store';


type ProfileStatusPropsType = {
  status: string
  changeStatus: (status: string) => ThunkType
}


export const ProfileStatus = (props: ProfileStatusPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, changeStatus] = useState<string>(props.status)

  useEffect(() => {
    changeStatus(props.status)
  }, [props.status])

  const activateEditMode = () => setEditMode(true)
  const deactivateEditMode = () => {
    setEditMode(false)
    props.changeStatus(status)
  }
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => changeStatus(e.currentTarget.value)

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