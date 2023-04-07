import {ActionType, ThunkType} from './redux-store';
import {authAPI} from '../api/api';


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

export const getUserData = (): ThunkType => {
  return (dispatch, getState) => {
    authAPI.getUserData()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(data.data))
        }
      })
  }
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