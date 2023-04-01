import React from 'react';
import s from './Search.module.css';
import {SearchUserItem} from './SearchUserItem/SearchUserItem';
import {SearchPageType} from '../../redux/search-reducer';

type UsersPropsType = SearchPageType & {
  // witch practice is better
  // usersTotalCount: number
  // usersOnPageCount: number
  // currentPage: number
  // users: Array<UserType>
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
  onPageChanged: (pageNumber: number) => void
}

export function SearchUsers(props: UsersPropsType) {
  let pagesCount = Math.ceil(props.usersTotalCount / props.usersOnPageCount)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className={s.feed}>
    <div className={s.pages}>
      {pages.map(p => <div
        key={p}
        className={props.currentPage === p ? `${s.page} ${s.selected}` : s.page}
        onClick={(e) => props.onPageChanged(p)}
      >{p}</div>)}
    </div>

    {props.users.map(u => <SearchUserItem key={u.id} id={u.id} followed={u.followed}
                                          avatarURL={u.avatarURL} name={u.name}
                                          status={u.status} smallAva={u.photos.small}
                                          subscribe={props.subscribe}
                                          unsubscribe={props.unsubscribe}/>)}
  </div>
}