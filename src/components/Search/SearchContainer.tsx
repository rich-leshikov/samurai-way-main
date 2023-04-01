import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {
  SearchPageType,
  setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  subscribeAC,
  unsubscribeAC,
  UserType
} from '../../redux/search-reducer';
import {Dispatch} from 'redux';
import axios from 'axios';
import {SearchUsers} from './SearchUsers';

type MapStatePropsType = SearchPageType
type MapDispatchPropsType = {
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (page: number) => void
  setTotalUsersCount: (usersCount: number) => void
}
export type SearchPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    users: state.searchPage.users,
    usersOnPageCount: state.searchPage.usersOnPageCount,
    usersTotalCount: state.searchPage.usersTotalCount,
    currentPage: state.searchPage.currentPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    subscribe: (userID: string) => dispatch(subscribeAC(userID)),
    unsubscribe: (userID: string) => dispatch(unsubscribeAC(userID)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
    setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
    setTotalUsersCount: (usersCount: number) => dispatch(setTotalUsersCountAC(usersCount))
  }
}

class SearchAPI extends React.Component<SearchPropsType> {

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
    return (
      <SearchUsers
        users={this.props.users}
        usersOnPageCount={this.props.usersOnPageCount}
        usersTotalCount={this.props.usersTotalCount}
        currentPage={this.props.currentPage}
        subscribe={this.props.subscribe}
        unsubscribe={this.props.unsubscribe}
        onPageChanged={this.onPageChanged.bind(this)}
      />
    )
  }
}

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAPI)