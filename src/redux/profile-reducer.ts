import {v1} from 'uuid';
import {ActionType, ThunkType} from './redux-store';
import {profileAPI} from '../api/api';


export type ProfileActionType = ReturnType<typeof updatePostTextarea>
  | ReturnType<typeof addPost>
  | ReturnType<typeof setProfile>
  | ReturnType<typeof setStatus>
export type ProfilePageType = {
  posts: Array<PostType>
  newPostFromTextarea: string
  profile: any
  status: string
}
export type PostType = {
  id: string
  message: string
  likesCount: number
}


export const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA'
export const ADD_POST = 'ADD-POST'
export const SET_PROFILE = 'SET-PROFILE'
export const SET_STATUS = 'SET-STATUS'


export const updatePostTextarea = (userText: string) => ({type: UPDATE_POST_TEXTAREA, newText: userText} as const)
export const addPost = () => ({type: ADD_POST} as const)
export const setProfile = (profile: any) => ({type: SET_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getProfile = (userId: string): ThunkType => {
  return (dispatch, getState) => {
    profileAPI.getProfile(userId)
      .then((data) => {
        dispatch(setProfile(data))
      })
  }
}
export const getStatus = (userId: string): ThunkType => {
  return (dispatch, getState) => {
    profileAPI.getStatus(userId)
      .then((data) => {
        dispatch(setStatus(data))
      })
  }
}
export const changeStatus = (status: string): ThunkType => {
  return (dispatch, getState) => {
    profileAPI.changeStatus(status)
      .then((data) => {
        if (!data.resultCode) {
          dispatch(setStatus(data))
        }
      })
  }
}


let initialState: ProfilePageType = {
  newPostFromTextarea: '',
  posts: [
    {id: v1(), message: 'Today I\'m playing guitar!', likesCount: 6},
    {id: v1(), message: 'What a nice day!', likesCount: 5},
    {id: v1(), message: 'Hello!', likesCount: 3},
  ],
  profile: null,
  status: "'      '"
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
  switch (action.type) {
    case UPDATE_POST_TEXTAREA:
      return {
        ...state,
        newPostFromTextarea: action.newText
      }
    case ADD_POST:
      const newPost: PostType = {
        id: v1(),
        message: state.newPostFromTextarea,
        likesCount: 0
      }
      return {
        ...state,
        newPostFromTextarea: '',
        posts: [newPost, ...state.posts]
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state as ProfilePageType
  }
}