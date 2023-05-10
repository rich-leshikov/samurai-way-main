import {v1} from 'uuid';
import {ActionType, ThunkType} from './redux-store';
import {profileAPI} from '../api/api';


export type ProfileActionType = ReturnType<typeof addPost>
  | ReturnType<typeof deletePost>
  | ReturnType<typeof setProfile>
  | ReturnType<typeof setFullName>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof savePhotoSuccess>
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string | null
  large: string | null
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
  aboutMe: string
}
export type ProfilePageType = {
  posts: Array<PostType>
  profile: ProfileType | null
  fullName: string
  status: string
}
export type PostType = {
  id: string
  message: string
  likesCount: number
}


export const ADD_POST = 'samurai-network/profile/ADD-POST'
export const DELETE_POST = 'samurai-network/profile/DELETE-POST'
export const SET_PROFILE = 'samurai-network/profile/SET-PROFILE'
export const SET_FULL_NAME = 'samurai-network/profile/SET-FULL-NAME'
export const SET_STATUS = 'samurai-network/profile/SET-STATUS'
export const SAVE_PHOTO_SUCCESS = 'samurai-network/profile/SAVE-PHOTO-SUCCESS'


export const addPost = (newPostFromTextarea: string) => ({type: ADD_POST, newPostFromTextarea} as const)
export const deletePost = (postId: string) => ({type: DELETE_POST, postId} as const)
export const setProfile = (profile: ProfileType) => ({type: SET_PROFILE, profile} as const)
export const setFullName = (fullName: string) => ({type: SET_FULL_NAME, fullName} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

export const getProfile = (userId: string): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getProfile(userId)

    dispatch(setProfile(data))
  }
}
export const getFullName = (userId: string): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getFullName(userId)

    dispatch(setFullName(data))
  }
}
export const getStatus = (userId: string): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getStatus(userId)

    dispatch(setStatus(data))
  }
}
export const changeStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.changeStatus(status)

    if (!data.resultCode) {
      dispatch(setStatus(status))
    }
  }
}
export const savePhoto = (file: any): ThunkType => {
  return async (dispatch) => {
    const data = await profileAPI.savePhoto(file)

    if (!data.resultCode) {
      dispatch(savePhotoSuccess(data.data.photos))
    }
  }
}
export const saveProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile)

    if (!data.resultCode && userId) {
      dispatch(getProfile(userId.toString()))
    }
  }
}


let initialState: ProfilePageType = {
  posts: [
    {id: v1(), message: 'Hello!', likesCount: 3},
    {id: v1(), message: 'What a nice day!', likesCount: 5},
    {id: v1(), message: 'Today I\'m playing guitar!', likesCount: 6},
  ],
  profile: null as ProfileType | null,
  fullName: '',
  status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: v1(),
        message: action.newPostFromTextarea,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_FULL_NAME:
      return {
        ...state,
        fullName: action.fullName
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType
      }
    default:
      return state as ProfilePageType
  }
}