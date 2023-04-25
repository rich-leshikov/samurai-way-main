import {ActionType, ThunkType} from './redux-store';
import {authAPI} from '../api/api';


export type AuthActionType = ReturnType<typeof setAuthUserData>
export type AuthType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}


export const SET_USER_DATA = 'SET-USER-DATA'


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  return {type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const
}

export const getAuthUserData = (): ThunkType => {
  return (dispatch, getState) => {
    authAPI.me()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, email, login} = data.data
          dispatch(setAuthUserData(id, email, login, true))
        }
      })
  }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
  return (dispatch, getState) => {
    authAPI.login(email, password, rememberMe)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(getAuthUserData())
        }
      })
  }
}
export const logout = (): ThunkType => {
  return (dispatch, getState) => {
    authAPI.logout()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
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
        ...action.payload
      }
    default:
      return state
  }
}