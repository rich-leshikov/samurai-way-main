import {combineReducers, createStore, Store} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {ActionsType} from './store';

let rootReducer = combineReducers({ // need typing??
  dialogsPage: dialogsReducer,
  profilePage: profileReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreType = Store<AppRootStateType, ActionsType>

export let store: StoreType = createStore(rootReducer)
