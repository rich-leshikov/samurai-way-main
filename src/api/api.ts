import axios from 'axios';


export type HeaderAPIType = {
  getUserData: () => Promise<any>
}
export type ProfileAPIType = {
  getUserProfile: (userId: string) => Promise<any>
}
export type UserAPIType = {
  getUsers: (currentPage: number, usersOnPageCount: number) => Promise<any>
  postSubscribeUser: (userID: string) => Promise<any>
  deleteUnsubscribeUser: (userID: string) => Promise<any>
}


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '101da96a-cbc9-42cf-b1c0-5fe635234205'
  }
})

export const headerAPI: HeaderAPIType = {
  getUserData: () => {
    return instance
      .get(`auth/me`)
      .then(response => response.data)
  }
}

export const profileAPI: ProfileAPIType = {
  getUserProfile: (userId: string = '2') => {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data)
  }
}

export const userAPI: UserAPIType = {
  getUsers: (currentPage: number = 1, usersOnPageCount: number = 10) => {
    return instance
      .get(`users?page=${currentPage}&count=${usersOnPageCount}`)
      .then(response => response.data)
  },
  postSubscribeUser: (userID: string) => {
    return instance
      .post(`follow/${userID}`, {})
      .then(response => response.data)
  },
  deleteUnsubscribeUser: (userID: string) => {
    return instance
      .delete(`follow/${userID}`)
      .then(response => response.data)
  }
}