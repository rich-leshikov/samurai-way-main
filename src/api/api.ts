import axios from 'axios';


export type AuthAPIType = {
  me: () => Promise<any>
}
export type UserAPIType = {
  getUserProfile: (userId: string) => Promise<any>
  getUsers: (currentPage: number, usersOnPageCount: number) => Promise<any>
  subscribe: (userID: string) => Promise<any>
  unsubscribe: (userID: string) => Promise<any>
}


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '101da96a-cbc9-42cf-b1c0-5fe635234205'
  }
})


export const authAPI: AuthAPIType = {
  me: () => {
    return instance
      .get(`auth/me`)
      .then(response => response.data)
  }
}
export const userAPI: UserAPIType = {
  getUserProfile: (userId: string = '2') => {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data)
  },
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