import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
  requestUsers,
  SearchPageType,
  setCurrentPage,
  subscribe,
  unsubscribe
} from '../../redux/search-reducer';
import {SearchUsers} from './SearchUsers';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getSubscribingInProgress,
  getUsers,
  getUsersTotalCount
} from '../../redux/search-selectors';


type MapStatePropsType = SearchPageType
type MapDispatchPropsType = { // why return void??
  setCurrentPage: (page: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
}
type SearchPropsType = MapStatePropsType & MapDispatchPropsType


class SearchAPIContainer extends React.Component<SearchPropsType> {
  componentDidMount(): void {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged(pageNumber: number): void {
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }
  subscribe(userID: string): void {
    this.props.subscribe(userID)
  }
  unsubscribe(userID: string): void {
    this.props.unsubscribe(userID)
  }
  render() {
    return (
      <>
        {this.props.isFetching ?
          <Preloader/> :
          <SearchUsers
            users={this.props.users}
            usersOnPageCount={this.props.pageSize}
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


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    usersTotalCount: getUsersTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    subscribingInProgress: getSubscribingInProgress(state)
  }
}


export const SearchContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {
    setCurrentPage,
    requestUsers,
    subscribe,
    unsubscribe
  })
)(SearchAPIContainer)