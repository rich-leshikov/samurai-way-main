import {v1} from 'uuid';
import {ActionType} from './redux-store';

export type DialogsActionType = ReturnType<typeof addMessage>

export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}
export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}


export const ADD_MESSAGE = 'ADD-MESSAGE'


export const addMessage = (newMessageFromTextarea: string) => ({type: ADD_MESSAGE, newMessageFromTextarea} as const)


const initialState: DialogsPageType = {
  dialogs: [
    {id: v1(), name: 'Dimych'},
    {id: v1(), name: 'Victor'},
    {id: v1(), name: 'Andrey'},
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Sveta'},
    {id: v1(), name: 'Valera'},
    {id: v1(), name: 'Igor'},
  ],
  messages: [
    {id: v1(), message: 'Hi!'},
    {id: v1(), message: 'What\'s good?'},
    {id: v1(), message: 'Yo!'},
  ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {
        id: v1(),
        message: action.newMessageFromTextarea
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    default:
      return state as DialogsPageType
  }
}