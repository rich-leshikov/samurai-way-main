import {ActionType, ThunkType} from './redux-store';
import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';


export type AuthActionType = ReturnType<typeof setAuthUserData>
  | ReturnType<typeof getCaptchaUrlSuccess>
export type AuthType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
}


export const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA'
export const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET-CAPTCHA-URL-SUCCESS'


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null) => {
  return {type: SET_USER_DATA, payload: {id, email, login, isAuth, captchaUrl}} as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
  return {type: GET_CAPTCHA_URL_SUCCESS, captchaUrl} as const
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let data = await authAPI.me()

  if (data.resultCode === 0) {
    const {id, email, login, captchaUrl} = data.data
    dispatch(setAuthUserData(id, email, login, true, captchaUrl))
  }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }

      const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Email or password is wrong'
      dispatch(stopSubmit('login', {_error: errorMessage}))
    }
  }
}
export const getCaptchaUrl = (): ThunkType => {
  return async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const message = data.url

    dispatch(getCaptchaUrlSuccess(message))
  }
}
export const logout = (): ThunkType => {
  return async (dispatch) => {
    let data = await authAPI.logout()

    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false, null))
    }
  }
}


let initialState: AuthType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    default:
      return state
  }
}