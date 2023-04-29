import {ActionType, ThunkType} from './redux-store';
import {userAPI} from '../api/api';


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


export const SUBSCRIBE = 'SUBSCRIBE'
export const UNSUBSCRIBE = 'UNSUBSCRIBE'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
export const SWITCH_IS_FETCHING = 'SWITCH-IS-FETCHING'
export const SWITCH_IS_SUBSCRIBING_PROGRESS = 'SWITCH-IS-SUBSCRIBING-PROGRESS'


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
  return (dispatch) => {
    dispatch(switchFetching())
    dispatch(setCurrentPage(page))

    userAPI.getUsers(page, pageSize)
      .then((data) => {
        dispatch(switchFetching())
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(Math.ceil(data.totalCount / 200))) //23607 without Math.ceil
      })
  }
}
export const subscribe = (userID: string): ThunkType => {
  return (dispatch) => {
    dispatch(switchSubscribingInProgress(true, userID))
    userAPI.subscribe(userID)
      .then((data) => {
        if (!data.resultCode) {
          dispatch(subscribeSuccess(userID))
        }
      })
      .finally(() => dispatch(switchSubscribingInProgress(false, userID)))
  }
}
export const unsubscribe = (userID: string): ThunkType => {
  return (dispatch) => {
    dispatch(switchSubscribingInProgress(true, userID))
    userAPI.unsubscribe(userID)
      .then((data) => {
        !data.resultCode && dispatch(unsubscribeSuccess(userID))
      })
      .finally(() => dispatch(switchSubscribingInProgress(false, userID)))
  }
}


let initialState: SearchPageType = {
  users: [],
  pageSize: 10,
  usersTotalCount: 0, //>23607
  currentPage: 1,
  isFetching: false,
  subscribingInProgress: []
}

export const searchReducer = (state: SearchPageType = initialState, action: ActionType): SearchPageType => {
  switch (action.type) {
    // should combine un- and subscribeSuccess??
    case SUBSCRIBE:
      return {
        ...state,
        users: state.users.map(u => u.id !== action.userID ? u : {...u, followed: u.followed = !u.followed})
      }
    case UNSUBSCRIBE:
      return {
        ...state,
        users: state.users.map(u => u.id !== action.userID ? u : {...u, followed: u.followed = !u.followed})
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