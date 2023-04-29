import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {DialogsActionType, dialogsReducer} from './dialogs-reducer';
import {ProfileActionType, profileReducer} from './profile-reducer';
import {SearchActionType, searchReducer} from './search-reducer';
import {AuthActionType, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {AppActionType, appReducer} from './app-reducer';


let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  searchPage: searchReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})


export type AppStateType = ReturnType<typeof rootReducer>
export type ActionType = ProfileActionType | DialogsActionType | SearchActionType | AuthActionType | AppActionType
export type StoreType = Store<AppStateType, ActionType>
export type ThunkType<R = void> = ThunkAction<R, AppStateType, unknown, ActionType>


export let store: StoreType = createStore(rootReducer, applyMiddleware(thunkMiddleware))