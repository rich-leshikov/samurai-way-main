import axios from 'axios';
import {ProfileType} from '../redux/profile-reducer';
import {UserType} from '../redux/search-reducer';


export type AuthAPIType = {
  me: () => Promise<any>
  login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => Promise<any>
  logout: () => Promise<any>
}
export type SecurityAPIType = {
  getCaptchaUrl: () => Promise<any>
}
export type UserAPIType = {
  getUsers: (currentPage: number, usersOnPageCount: number) => Promise<any>
  subscribe: (userID: string) => Promise<any>
  unsubscribe: (userID: string) => Promise<any>
}
export type ProfileAPIType = {
  getProfile: (userId: string) => Promise<any>
  getFullName: (userId: string) => Promise<any>
  getStatus: (userId: string) => Promise<any>
  changeStatus: (status: string) => Promise<any>
  savePhoto: (file: any) => Promise<any>
  saveProfile: (profile: any) => Promise<any>
}
export type GetItemsType = {
  items: Array<UserType>
  totalCount: number,
  error: null | string
}
export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  resultCode: RC
  messages: Array<string>
}

// enum может быть либо A, либо B...
export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeCaptchaEnum {
  CaptchaIsRequired = 10
}


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '99bd0ff6-13b6-4774-a7f5-1bbc0224aa2f'
  }
})


export const authAPI: AuthAPIType = {
  me: () => {
    return instance
      .get(`auth/me`)
      .then(response => response.data)
  },
  login: (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) => {
    return instance
      .post('auth/login', {email, password, rememberMe, captcha})
      .then(response => response.data)
  },
  logout: () => {
    return instance
      .delete('auth/login')
      .then(response => response.data)
  }
}
export const securityAPI: SecurityAPIType = {
  getCaptchaUrl: () => {
    return instance
      .get(`security/get-captcha-url`)
      .then(response => response.data)
  }
}
export const userAPI: UserAPIType = {
  getUsers: (currentPage: number = 1, usersOnPageCount: number = 10) => {
    return instance
      .get(`users?page=${currentPage}&count=${usersOnPageCount}`)
      .then(response => response.data)
  },
  subscribe: (userID: string) => {
    return instance
      .post(`follow/${userID}`, {})
      .then(response => response.data)
  },
  unsubscribe: (userID: string) => {
    return instance
      .delete(`follow/${userID}`)
      .then(response => response.data)
  }
}
export const profileAPI: ProfileAPIType = {
  getProfile: (userId: string = '2') => {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data)
  },
  getFullName: (userId: string = '2') => {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data.fullName)
  },
  getStatus: (userId: string = '2') => {
    return instance
      .get(`profile/status/${userId}`)
      .then(response => response.data)
  },
  changeStatus: (status: string) => {
    return instance
      .put(`profile/status`, {status})
      .then(response => response.data)
  },
  savePhoto: (photoFile: File) => {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => response.data)
  },
  saveProfile: (profile: ProfileType) => {
    return instance
      .put<APIResponseType>(`profile`, profile)
      .then(response => response.data)
  }
}