import React from 'react';
import {connect} from 'react-redux';
import {Search} from './Search';
import {AppRootStateType} from '../../redux/redux-store';
import {SearchPageType, setUsersAC, subscribeAC, unsubscribeAC, UserType} from '../../redux/search-reducer';
import {Dispatch} from 'redux';

type MapStatePropsType = SearchPageType
type MapDispatchPropsType = {
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
  setUsers: (users: Array<UserType>) => void
}
export type SearchPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    users: state.searchPage.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    subscribe: (userID: string) => dispatch(subscribeAC(userID)),
    unsubscribe: (userID: string) => dispatch(unsubscribeAC(userID)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
  }
}

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)