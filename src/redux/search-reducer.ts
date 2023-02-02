import {ActionsType, SearchPageType, UsersType} from './store';
import {v1} from 'uuid';

export type SearchActionsType = ReturnType<typeof subscribeAC>
  | ReturnType<typeof unsubscribeAC>
  | ReturnType<typeof setUsersAC>

export const SUBSCRIBE = 'SUBSCRIBE'
export const UNSUBSCRIBE = 'UNSUBSCRIBE'
export const SET_USERS = 'SET-USERS'

export const subscribeAC = (userID: string) => ({type: SUBSCRIBE, userID: userID} as const)
export const unsubscribeAC = (userID: string) => ({type: UNSUBSCRIBE, userID: userID} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users: users} as const)

let initialState: SearchPageType = {
  // users: [
  //   {
  //     id: v1(),
  //     followed: true,
  //     avatarURL: './../../../img/users_avatars/rambo.jpg',
  //     fullName: 'Billy',
  //     status: 'Happy!',
  //     location: {state: 'USA', city: 'Miami'}
  //   },
  //   {
  //     id: v1(),
  //     followed: true,
  //     avatarURL: './../../../img/users_avatars/rambo.jpg',
  //     fullName: 'Van',
  //     status: 'Happy!',
  //     location: {state: 'Japan', city: 'Kyoto'}
  //   },
  //   {
  //     id: v1(),
  //     followed: true,
  //     avatarURL: './../../../img/users_avatars/rambo.jpg',
  //     fullName: 'Steve',
  //     status: 'Happy!',
  //     location: {state: 'USA', city: 'Austin'}
  //   },
  //   {
  //     id: v1(),
  //     followed: false,
  //     avatarURL: './../../../img/users_avatars/rambo.jpg',
  //     fullName: 'Mark',
  //     status: 'Happy!',
  //     location: {state: 'USA', city: 'LA'}
  //   },
  // ],
  users: []
}

export const searchReducer = (state: SearchPageType = initialState, action: ActionsType): SearchPageType => {
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