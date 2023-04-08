import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
  getUsers,
  SearchPageType,
  setCurrentPage,
  subscribe,
  unsubscribe
} from '../../redux/search-reducer';
import {SearchUsers} from './SearchUsers';
import {Preloader} from '../EmbeddedModules/Preloader/Preloader';


type MapStatePropsType = SearchPageType
type MapDispatchPropsType = { // why return void??
  setCurrentPage: (page: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  subscribe: (userID: string) => void
  unsubscribe: (userID: string) => void
}
type SearchPropsType = MapStatePropsType & MapDispatchPropsType


class SearchAPIContainer extends React.Component<SearchPropsType> {
  componentDidMount(): void {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged(pageNumber: number): void {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
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
    users: state.searchPage.users,
    pageSize: state.searchPage.pageSize,
    usersTotalCount: state.searchPage.usersTotalCount,
    currentPage: state.searchPage.currentPage,
    isFetching: state.searchPage.isFetching,
    subscribingInProgress: state.searchPage.subscribingInProgress
  }
}


export const SearchContainer = connect(mapStateToProps,
  {
    setCurrentPage,
    getUsers,
    subscribe,
    unsubscribe
  })(SearchAPIContainer)