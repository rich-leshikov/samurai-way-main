import {ActionType} from './redux-store';
// import {v1} from 'uuid';

export type SearchActionType = ReturnType<typeof subscribeAC>
  | ReturnType<typeof unsubscribeAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof switchFetchingAC>

export type SearchPageType = {
  users: Array<UserType>
  usersOnPageCount: number
  usersTotalCount: number
  currentPage: number
  isFetching: boolean
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
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const SWITCH_FETCHING = 'SWITCH_FETCHING'

export const subscribeAC = (userID: string) => ({type: SUBSCRIBE, userID} as const)
export const unsubscribeAC = (userID: string) => ({type: UNSUBSCRIBE, userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (usersCount: number) => ({type: SET_TOTAL_USERS_COUNT, usersCount} as const)
export const switchFetchingAC = () => ({type: SWITCH_FETCHING} as const)

let initialState: SearchPageType = {
  // users: [
  //   {
  //     id: v1(),
  //     followed: true,
  //     avatarURL: './../../../img/users_avatars/rambo.jpg',
  //     name: 'Billy',
  //     status: 'Happy!',
  //     location: {state: 'USA', city: 'Miami'}
  //   },
  //   {
  //     id: v1(),
  //     followed: true,
  //     avatarURL: './../../../img/users_avatars/rambo.jpg',
  //     name: 'Van',
  //     status: 'Happy!',
  //     location: {state: 'Japan', city: 'Kyoto'}
  //   },
  //   {
  //     id: v1(),
  //     followed: true,
  //     avatarURL: './../../../img/users_avatars/rambo.jpg',
  //     name: 'Steve',
  //     status: 'Happy!',
  //     location: {state: 'USA', city: 'Austin'}
  //   },
  //   {
  //     id: v1(),
  //     followed: false,
  //     avatarURL: './../../../img/users_avatars/rambo.jpg',
  //     name: 'Mark',
  //     status: 'Happy!',
  //     location: {state: 'USA', city: 'LA'}
  //   },
  // ],
  users: [],
  usersOnPageCount: 10,
  usersTotalCount: 0, //23607
  currentPage: 1,
  isFetching: false
}

export const searchReducer = (state: SearchPageType = initialState, action: ActionType): SearchPageType => {
  switch (action.type) {
    // should combine un- and subscribe??
    case SUBSCRIBE:
      return {
        ...state,
        users: state.users.map(u => u.id !== action.userID ? u : {...u, followed: u.followed = !u.followed})
      } as SearchPageType
    case UNSUBSCRIBE:
      return {
        ...state,
        users: state.users.map(u => u.id !== action.userID ? u : {...u, followed: u.followed = !u.followed})
      } as SearchPageType
    case SET_USERS:
      return {...state, users: [...action.users]} as SearchPageType
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage} as SearchPageType
    case SET_TOTAL_USERS_COUNT:
      return {...state, usersTotalCount: action.usersCount} as SearchPageType
    case SWITCH_FETCHING:
      return {...state, isFetching: !state.isFetching} as SearchPageType
    default:
      return state as SearchPageType
  }
}