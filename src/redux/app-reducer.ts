import {ActionType, ThunkType} from './redux-store';
import {getAuthUserData} from './auth-reducer';


export type AppActionType = ReturnType<typeof initializedSuccess>
export type AppType = {
  initialized: boolean
}


export const INITIALIZED_SUCCESS = 'samurai-network/app/INITIALIZED-SUCCESS'


export const initializedSuccess = () => {
  return {type: INITIALIZED_SUCCESS} as const
}

export const initializeApp = (): ThunkType => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
    })
  }
}


let initialState: AppType = {
  initialized: false
}

export const appReducer = (state: AppType = initialState, action: ActionType): AppType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}