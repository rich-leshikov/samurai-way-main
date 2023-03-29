import React from 'react';
import s from './Search.module.css'
import {SearchUserItem} from './SearchUserItem/SearchUserItem';
import axios from 'axios';
import {SearchPropsType} from './SearchContainer';

export function SearchFunc(props: SearchPropsType) {
  if (!props.users.length) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
      props.setUsers(response.data.items)
    })
  }

  return (
    <div className={s.feed}>
      {props.users.map(u => <SearchUserItem key={u.id} id={u.id} followed={u.followed} avatarURL={u.avatarURL}
                                            name={u.name} status={u.status} smallAva={u.photos.small}
                                            subscribe={props.subscribe} unsubscribe={props.unsubscribe}/>)}
    </div>
  )
}