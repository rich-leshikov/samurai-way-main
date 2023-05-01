import React from 'react';
import {UserType} from '../../redux/search-reducer';
import s from './Search.module.css';
import {User} from './SearchUserItem/User';
import {Paginator} from '../common/Paginator/Paginator';

type SearchUsersPropsType = {
  usersTotalCount: number
  usersOnPageCount: number
  currentPage: number
  subscribingInProgress: Array<string>
  users: Array<UserType>
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
  onPageChanged: (pageNumber: number) => void
}

export function SearchUsers(props: SearchUsersPropsType) {
  return (
    <div className={s.feed}>
      <Paginator
        usersTotalCount={props.usersTotalCount}
        usersOnPageCount={props.usersOnPageCount}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />

      {props.users.map(u => (
        <User
          key={u.id} id={u.id}
          followed={u.followed}
          avatarURL={u.avatarURL}
          name={u.name}
          status={u.status}
          smallAva={u.photos.small}
          subscribingInProgress={props.subscribingInProgress}
          subscribe={props.subscribe}
          unsubscribe={props.unsubscribe}
        />
      ))}
    </div>
  )
}