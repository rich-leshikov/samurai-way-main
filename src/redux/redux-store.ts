import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';


let reducers = combineReducers({ // need typing??
  dialogsPage: dialogsReducer,
  profilePage: profileReducer
})

export let store = createStore(reducers) // need typing??

export type AppRootStateType = ReturnType<typeof reducers>
