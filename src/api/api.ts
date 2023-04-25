import axios from 'axios';


export type AuthAPIType = {
  me: () => Promise<any>
  login: (email: string, password: string, rememberMe: boolean) => Promise<any>
  logout: () => Promise<any>
}
export type UserAPIType = {
  getUsers: (currentPage: number, usersOnPageCount: number) => Promise<any>
  subscribe: (userID: string) => Promise<any>
  unsubscribe: (userID: string) => Promise<any>
}
export type ProfileAPIType = {
  getProfile: (userId: string) => Promise<any>
  getStatus: (userId: string) => Promise<any>
  changeStatus: (status: string) => Promise<any>
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
  login: (email: string, password: string, rememberMe: boolean = false) => {
    return instance
      .post('auth/login', {email, password, rememberMe})
      .then(response => response.data)
  },
  logout: () => {
    return instance
      .delete('auth/login')
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
  getStatus: (userId: string = '2') => {
    return instance
      .get(`profile/status/${userId}`)
      .then(response => response.data)
  },
  changeStatus: (status: string) => {
    return instance
      .put(`profile/status`, {status})
      .then(response => response.data)
  }
}