import React from 'react';
import s from './SearchUserItem.module.css'
import {LocationType} from '../../../redux/store';

type SearchUserItemPropsType = {
  id: string,
  followed: boolean,
  avatarURL: string, // can't send props.avatarURL to require()
  fullName: string,
  status: string,
  location: LocationType,
  subscribe: (userID: string) => void,
  unsubscribe: (userID: string) => void,
}

export function SearchUserItem(props: SearchUserItemPropsType) {
  return (
    <div className={s.search__user} key={props.id}>
      <span>
        <div className={s.avatar}>
          <img src={require('./../../../img/users_avatars/rambo.jpg')} alt="user avatar"/>
        </div>
        <div>
          {props.followed ?
            <button onClick={() => props.unsubscribe(props.id)}>Unsubscribe</button> :
            <button onClick={() => props.subscribe(props.id)}>Subscribe</button>}
        </div>
      </span>
      <span>
        <span>
          <div>{props.fullName}</div>
          <div>{props.status}</div>
        </span>
        <span>
          <div>{props.location.state}</div>
          <div>{props.location.city}</div>
        </span>
      </span>
    </div>
  );
}