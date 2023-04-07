import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {
  SearchPageType,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  subscribe,
  switchFetching, switchSubscribingInProgress,
  unsubscribe,
  UserType
} from '../../redux/search-reducer';
import {SearchUsers} from './SearchUsers';
import {Preloader} from '../EmbeddedModules/Preloader/Preloader';
import {userAPI} from '../../api/api';


type MapStatePropsType = SearchPageType
type MapDispatchPropsType = {
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (page: number) => void
  setTotalUsersCount: (usersCount: number) => void
  switchFetching: () => void
  switchSubscribingInProgress: (isFetching: boolean, userId: string) => void
}
type SearchPropsType = MapStatePropsType & MapDispatchPropsType


class SearchAPI extends React.Component<SearchPropsType> {
  componentDidMount(): void {
    this.props.switchFetching()
    userAPI.getUsers(this.props.currentPage, this.props.usersOnPageCount)
      .then((data) => {
        this.props.switchFetching()
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(Math.ceil(data.totalCount / 100)) //23607 without Math.ceil
      })
  }

  onPageChanged(pageNumber: number): void {
    this.props.setCurrentPage(pageNumber)
    this.props.switchFetching()
    userAPI.getUsers(pageNumber, this.props.usersOnPageCount)
      .then((data) => {
        this.props.switchFetching()
        this.props.setUsers(data.items)
      })
  }

  subscribe(userID: string): void {
    this.props.switchSubscribingInProgress(true, userID)
    userAPI.postSubscribeUser(userID)
      .then((data) => {
        if (!data.resultCode) {
          this.props.subscribe(userID)
        }
      })
      .finally(() => this.props.switchSubscribingInProgress(false, userID))
  }

  unsubscribe(userID: string): void {
    this.props.switchSubscribingInProgress(true, userID)
    userAPI.deleteUnsubscribeUser(userID)
      .then((response) => {
        !response.data.resultCode && this.props.unsubscribe(userID)
      })
      .finally(() => this.props.switchSubscribingInProgress(false, userID))
  }

  render() {
    return (
      <>
        {this.props.isFetching ?
          <Preloader/> :
          <SearchUsers
            users={this.props.users}
            usersOnPageCount={this.props.usersOnPageCount}
            usersTotalCount={this.props.usersTotalCount}
            currentPage={this.props.currentPage}
            subscribingInProgress={this.props.subscribingInProgress}
            subscribe={this.subscribe.bind(this)}
            unsubscribe={this.unsubscribe.bind(this)}
            onPageChanged={this.onPageChanged.bind(this)}
          />}
      </>
    )
  }
}


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    users: state.searchPage.users,
    usersOnPageCount: state.searchPage.usersOnPageCount,
    usersTotalCount: state.searchPage.usersTotalCount,
    currentPage: state.searchPage.currentPage,
    isFetching: state.searchPage.isFetching,
    subscribingInProgress: state.searchPage.subscribingInProgress
  }
}


export const SearchContainer = connect(mapStateToProps,
  {
    subscribe,
    unsubscribe,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    switchFetching,
    switchSubscribingInProgress
  })(SearchAPI)