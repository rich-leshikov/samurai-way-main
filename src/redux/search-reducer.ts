import {ActionType, ThunkType} from './redux-store';
import {userAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {updateObjectInArray} from '../utils/object-helpers';


export type SearchActionType = ReturnType<typeof subscribeSuccess>
  | ReturnType<typeof unsubscribeSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof switchFetching>
  | ReturnType<typeof switchSubscribingInProgress>
export type SearchPageType = {
  users: Array<UserType>
  pageSize: number
  usersTotalCount: number
  currentPage: number
  portionSize: number
  isFetching: boolean
  subscribingInProgress: Array<string>
}
export type UserType = {
  id: string
  followed: boolean
  avatarURL: string
  name: string
  status: string
  photos: PhotosType
  // location: LocationType
}
export type PhotosType = {
  small: string
  large: string
}
export type LocationType = {
  state: string
  city: string
}


export const SUBSCRIBE = 'samurai-network/search/SUBSCRIBE'
export const UNSUBSCRIBE = 'samurai-network/search/UNSUBSCRIBE'
export const SET_USERS = 'samurai-network/search/SET-USERS'
export const SET_CURRENT_PAGE = 'samurai-network/search/SET-CURRENT-PAGE'
export const SET_TOTAL_USERS_COUNT = 'samurai-network/search/SET-TOTAL-USERS-COUNT'
export const SWITCH_IS_FETCHING = 'samurai-network/search/SWITCH-IS-FETCHING'
export const SWITCH_IS_SUBSCRIBING_PROGRESS = 'samurai-network/search/SWITCH-IS-SUBSCRIBING-PROGRESS'


export const subscribeSuccess = (userID: string) => ({type: SUBSCRIBE, userID} as const)
export const unsubscribeSuccess = (userID: string) => ({type: UNSUBSCRIBE, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (usersCount: number) => ({type: SET_TOTAL_USERS_COUNT, usersCount} as const)
export const switchFetching = () => ({type: SWITCH_IS_FETCHING} as const)
export const switchSubscribingInProgress = (isFetching: boolean, userId: string) => {
  return {
    type: SWITCH_IS_SUBSCRIBING_PROGRESS,
    isFetching,
    userId
  } as const
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(switchFetching())
    dispatch(setCurrentPage(page))

    let data = await userAPI.getUsers(page, pageSize)

    dispatch(switchFetching())
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}
const subscribeUnsubscribeFlow = async (dispatch: ThunkDispatch<any, any, any>, userId: string, apiMethod: (userId: string) => Promise<any>, actionCreator: (userID: string) => any) => {
  dispatch(switchSubscribingInProgress(true, userId))

  let data = await apiMethod(userId)

  if (!data.resultCode) {
    dispatch(actionCreator(userId))
  }

  dispatch(switchSubscribingInProgress(false, userId))
}
export const subscribe = (userID: string): ThunkType => {
  return async (dispatch) => {
    await subscribeUnsubscribeFlow(dispatch, userID, userAPI.subscribe.bind(userAPI), subscribeSuccess)
  }
}
export const unsubscribe = (userID: string): ThunkType => {
  return async (dispatch) => {
    await subscribeUnsubscribeFlow(dispatch,userID,userAPI.unsubscribe.bind(userAPI), unsubscribeSuccess)
  }
}


let initialState: SearchPageType = {
  users: [],
  pageSize: 10,
  usersTotalCount: 0,
  currentPage: 1,
  portionSize: 11,
  isFetching: false,
  subscribingInProgress: []
}

export const searchReducer = (state: SearchPageType = initialState, action: ActionType): SearchPageType => {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      }
    case UNSUBSCRIBE:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
      }
    case SET_USERS:
      return {...state, users: [...action.users]}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, usersTotalCount: action.usersCount}
    case SWITCH_IS_FETCHING:
      return {...state, isFetching: !state.isFetching}
    case SWITCH_IS_SUBSCRIBING_PROGRESS:
      return {
        ...state,
        subscribingInProgress: action.isFetching ?
          [...state.subscribingInProgress, action.userId] :
          state.subscribingInProgress.filter(id => action.userId !== id)
      }
    default:
      return state as SearchPageType
  }
}