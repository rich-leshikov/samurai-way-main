import React, {useState} from 'react';
import s from './Paginator.module.css';


type PaginatorPropsType = {
  itemsTotalCount: number
  pageSize: number
  currentPage: number
  portionSize?: number
  onPageChanged: (pageNumber: number) => void
}


export const Paginator = ({
                            itemsTotalCount,
                            pageSize,
                            currentPage,
                            onPageChanged,
                            portionSize = 10
                          }: PaginatorPropsType) => {
  let pagesCount = Math.ceil(itemsTotalCount / pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState<number>(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return <div className={s.pages}>
    {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>...</button>}
    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map(p => <div
      key={p}
      className={currentPage === p ? `${s.page} ${s.selected}` : s.page}
      onClick={(e) => onPageChanged(p)}
    >{p}</div>)}
    {portionNumber < portionCount && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>...</button>}
  </div>
}