import {AppStateType} from './redux-store';

export const getUsers = (state: AppStateType) => state.searchPage.users
export const getPageSize = (state: AppStateType) => state.searchPage.pageSize
export const getUsersTotalCount = (state: AppStateType) => state.searchPage.usersTotalCount
export const getCurrentPage = (state: AppStateType) => state.searchPage.currentPage
export const getIsFetching = (state: AppStateType) => state.searchPage.isFetching
export const getSubscribingInProgress = (state: AppStateType) => state.searchPage.subscribingInProgress