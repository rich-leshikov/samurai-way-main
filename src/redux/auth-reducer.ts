import {ActionType} from './redux-store';


export type AuthActionType = ReturnType<typeof setAuthUserData>
export type AuthType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
export type DataAuthType = {
  id: number | null
  email: string | null
  login: string | null
}


export const SET_USER_DATA = 'SET-USER-DATA'


export const setAuthUserData = (data: DataAuthType) => {
  return {type: SET_USER_DATA, data} as const
}



let initialState: AuthType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}