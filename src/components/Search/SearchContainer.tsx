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
import {Search} from './Search';

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

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)