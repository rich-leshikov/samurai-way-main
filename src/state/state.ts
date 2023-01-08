export type StateType = {
  dialogPage: DialogPageType,
  profilePage: ProfilePageType,
}

export type ProfilePageType = {
  posts: Array<PostsType>,
}

export type DialogPageType = {
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>,
}

export type DialogsType = {
  id: string,
  name: string
}

export type MessagesType = {
  id: string,
  message: string
}

export type PostsType = {
  id: string,
  message: string,
  likesCount: number
}

export const state: StateType = {
  dialogPage: {
    dialogs: [
      {id: '1', name: 'Dimych'},
      {id: '2', name: 'Victor'},
      {id: '3', name: 'Andrey'},
      {id: '4', name: 'Sasha'},
      {id: '5', name: 'Sveta'},
      {id: '6', name: 'Valera'},
      {id: '7', name: 'Igor'},
    ],
    messages: [
      {id: '1', message: 'Hi!'},
      {id: '2', message: 'What\'s good?'},
      {id: '3', message: 'Yo!'},
    ],
  },
  profilePage: {
    posts: [
      {id: '1', message: 'Hello!', likesCount: 3},
      {id: '2', message: 'What a nice day!', likesCount: 5},
      {id: '3', message: 'Today I\'m playing guitar!', likesCount: 6},
    ]
  },
}