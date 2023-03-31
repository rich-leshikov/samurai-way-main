import React from 'react';
import s from './Search.module.css'
import {SearchUserItem} from './SearchUserItem/SearchUserItem';
import axios from 'axios';
import {SearchPropsType} from './SearchContainer';

export class Search extends React.Component<SearchPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPageCount}`)
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(Math.ceil(response.data.totalCount / 100)) //23607 without Math.ceil
      })
  }

  onPageChanged(pageNumber: number) {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPageCount}`)
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.usersOnPageCount)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <div className={s.feed}>
      <div className={s.pages}>
        {pages.map(p => <div
          key={p}
          className={this.props.currentPage === p ? `${s.page} ${s.selected}` : s.page}
          onClick={(e) => this.onPageChanged(p)}
        >{p}</div>)}
      </div>

      {this.props.users.map(u => <SearchUserItem key={u.id} id={u.id} followed={u.followed} avatarURL={u.avatarURL}
                                                 name={u.name} status={u.status} smallAva={u.photos.small}
                                                 subscribe={this.props.subscribe}
                                                 unsubscribe={this.props.unsubscribe}/>)}
    </div>
  }
}