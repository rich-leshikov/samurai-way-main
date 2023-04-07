import {ActionType} from './redux-store';

export type SearchActionType = ReturnType<typeof subscribe>
  | ReturnType<typeof unsubscribe>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof switchFetching>
  | ReturnType<typeof switchSubscribingInProgress>

export type SearchPageType = {
  users: Array<UserType>
  usersOnPageCount: number
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

export const subscribe = (userID: string) => ({type: SUBSCRIBE, userID} as const)
export const unsubscribe = (userID: string) => ({type: UNSUBSCRIBE, userID} as const)
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

let initialState: SearchPageType = {
  users: [],
  usersOnPageCount: 10,
  usersTotalCount: 0, //>23607
  currentPage: 1,
  isFetching: false,
  subscribingInProgress: []
}

export const searchReducer = (state: SearchPageType = initialState, action: ActionType): SearchPageType => {
  switch (action.type) {
    // should combine un- and subscribe??
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