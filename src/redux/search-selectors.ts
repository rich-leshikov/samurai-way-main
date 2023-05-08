import {AppStateType} from './redux-store';
import {createSelector} from 'reselect';

export const getUsersSelector = (state: AppStateType) => state.searchPage.users
export const getUsers = createSelector(getUsersSelector, (users) => users.map(u => u))
export const getPageSize = (state: AppStateType) => state.searchPage.pageSize
export const getUsersTotalCount = (state: AppStateType) => state.searchPage.usersTotalCount
export const getCurrentPage = (state: AppStateType) => state.searchPage.currentPage
export const getPortionSize = (state: AppStateType) => state.searchPage.portionSize
export const getIsFetching = (state: AppStateType) => state.searchPage.isFetching
export const getSubscribingInProgress = (state: AppStateType) => state.searchPage.subscribingInProgress