import {combineReducers, createStore, Store} from 'redux';
import {DialogsActionType, dialogsReducer} from './dialogs-reducer';
import {ProfileActionType, profileReducer} from './profile-reducer';
import {SearchActionType, searchReducer} from './search-reducer';

let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  searchPage: searchReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type ActionType = ProfileActionType | DialogsActionType | SearchActionType
export type StoreType = Store<AppRootStateType, ActionType>

export let store: StoreType = createStore(rootReducer)
