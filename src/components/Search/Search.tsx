import React from 'react';
import s from './Search.module.css'
import {SearchUserItem} from './SearchUserItem/SearchUserItem';
import axios from 'axios';
import {SearchPropsType} from './SearchContainer';

// type SearchType = {
//   users: Array<UserType>
//   setUsers: (users: Array<UserType>) => void
//   subscribe: (userID: string) => void
//   unsubscribe: (userID: string) => void
// }

export class Search extends React.Component<SearchPropsType> {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <div className={s.feed}>{
      this.props.users.map(u => <SearchUserItem key={u.id} id={u.id} followed={u.followed} avatarURL={u.avatarURL}
                                                name={u.name} status={u.status} smallAva={u.photos.small}
                                                subscribe={this.props.subscribe} unsubscribe={this.props.unsubscribe}/>)
    }</div>
  }
}