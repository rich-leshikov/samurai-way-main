import React from 'react';
import s from './Search.module.css'
import {SearchUserItem} from './SearchUserItem/SearchUserItem';
import {v1} from 'uuid';
import {SearchPropsType} from './SearchContainer';

export function Search(props: SearchPropsType) {
  const subscribe = (userID: string) => props.subscribe(userID)
  const unsubscribe = (userID: string) => props.unsubscribe(userID)

  if (!props.users.length) {
    props.setUsers([
      {
        id: v1(),
        followed: true,
        avatarURL: './../../../img/users_avatars/rambo.jpg',
        fullName: 'Billy',
        status: 'Happy!',
        location: {state: 'USA', city: 'Miami'}
      },
      {
        id: v1(),
        followed: true,
        avatarURL: './../../../img/users_avatars/rambo.jpg',
        fullName: 'Van',
        status: 'Happy!',
        location: {state: 'Japan', city: 'Kyoto'}
      },
      {
        id: v1(),
        followed: true,
        avatarURL: './../../../img/users_avatars/rambo.jpg',
        fullName: 'Steve',
        status: 'Happy!',
        location: {state: 'USA', city: 'Austin'}
      },
      {
        id: v1(),
        followed: false,
        avatarURL: './../../../img/users_avatars/rambo.jpg',
        fullName: 'Mark',
        status: 'Happy!',
        location: {state: 'USA', city: 'LA'}
      },
    ],)
  }

  return (
    <div className={s.feed}>
      {props.users.map(u => <SearchUserItem key={u.id} id={u.id} followed={u.followed} avatarURL={u.avatarURL}
                                            fullName={u.fullName} status={u.status} location={u.location}
                                            subscribe={subscribe} unsubscribe={unsubscribe}/>)}
    </div>
  );
}