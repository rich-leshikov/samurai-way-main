import React from 'react';
import {connect} from 'react-redux';
import {Search} from './Search';
import {AppRootStateType} from '../../redux/redux-store';
import {setUsersAC, subscribeAC, unsubscribeAC} from '../../redux/search-reducer';
import {UsersType} from '../../redux/store';

const mapStateToProps = (state: AppRootStateType) => {
  return {
    users: state.searchPage.users
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    subscribe: (userID: string) => dispatch(subscribeAC(userID)),
    unsubscribe: (userID: string) => dispatch(unsubscribeAC(userID)),
    setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
  }
}

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)