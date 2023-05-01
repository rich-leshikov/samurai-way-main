import React from 'react';
import s from './Paginator.module.css';

type PaginatorPropsType = {
  usersTotalCount: number
  usersOnPageCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}

export function Paginator({usersTotalCount, usersOnPageCount, currentPage, onPageChanged}: PaginatorPropsType) {
  let pagesCount = Math.ceil(usersTotalCount / usersOnPageCount)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className={s.pages}>
      {pages.map(p => <div
        key={p}
        className={currentPage === p ? `${s.page} ${s.selected}` : s.page}
        onClick={(e) => onPageChanged(p)}
      >{p}</div>)}
    </div>
}