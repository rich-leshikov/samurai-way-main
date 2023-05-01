import React from 'react';
import s from './SearchUserItem.module.css'
import {NavLink} from 'react-router-dom';

type UserPropsType = {
  id: string
  followed: boolean
  avatarURL: string // can't send props.avatarURL to require()
  name: string
  status: string
  smallAva: string
  subscribingInProgress: Array<string>
  // location: LocationType
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
}

export function User(props: UserPropsType) {
  const isDisabled = props.subscribingInProgress.some(id => props.id === id)

  const onClickSubscribe = () => props.subscribe(props.id)
  const onClickUnsubscribe = () => props.unsubscribe(props.id)

  return (
    <div className={s.search__user} key={props.id}>
      <div className={s.icon}>
        <NavLink to={'/profile/' + props.id}>
          <div className={s.avatar}>
            <img src={props.smallAva ? props.smallAva : require('../../../assets/img/no_data_avatar.png')} alt="user avatar"/>
          </div>
        </NavLink>
        <div>
          {props.followed ?
            <button
              onClick={onClickUnsubscribe}
              disabled={isDisabled}
              style={isDisabled ? {
                backgroundColor: '#d5d4d4',
                cursor: 'text'
              } : {}}
            >Unsubscribe</button> :
            <button
              onClick={onClickSubscribe}
              disabled={isDisabled}
              style={isDisabled ? {
                backgroundColor: '#d5d4d4',
                cursor: 'text'
              } : {}}
            >Subscribe</button>}
        </div>
      </div>
      <div className={s.info}>
        <div>
          <div className={s.fullName}>{props.name}</div>
          <div className={s.status}>{props.status ? props.status : 'no status'}</div>
        </div>
        <div className={s.location}>
          <div>{'props.location.state'}</div>
          <div>{'props.location.city'}</div>
        </div>
      </div>
    </div>
  );
}