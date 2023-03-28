import {ActionType} from './redux-store';
// import {v1} from 'uuid';

export type SearchActionType = ReturnType<typeof subscribeAC>
  | ReturnType<typeof unsubscribeAC>
  | ReturnType<typeof setUsersAC>

export type SearchPageType = {
  users: Array<UserType>
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

export const subscribeAC = (userID: string) => ({type: SUBSCRIBE, userID: userID} as const)
export const unsubscribeAC = (userID: string) => ({type: UNSUBSCRIBE, userID: userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const)

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
  users: []
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
      return {...state, users: [...state.users, ...action.users]} as SearchPageType
    default:
      return state as SearchPageType
  }
}