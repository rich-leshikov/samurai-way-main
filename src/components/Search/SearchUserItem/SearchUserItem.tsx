import React from 'react';
import s from './SearchUserItem.module.css'
import {LocationType, PhotosType} from '../../../redux/search-reducer';

type SearchUserItemPropsType = {
  id: string
  followed: boolean
  avatarURL: string // can't send props.avatarURL to require()
  name: string
  status: string
  smallAva: string
  // location: LocationType
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
}

export function SearchUserItem(props: SearchUserItemPropsType) {
  return (
    <div className={s.search__user} key={props.id}>
      <div className={s.icon}>
        <div className={s.avatar}>
          <img src={props.smallAva ? props.smallAva : require('./../../../img/doomer.jpg')} alt="user avatar"/>
        </div>
        <div>
          {props.followed ?
            <button onClick={() => props.unsubscribe(props.id)}>Unsubscribe</button> :
            <button onClick={() => props.subscribe(props.id)}>Subscribe</button>}
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