import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType, store} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {WithSuspense} from './hoc/withSuspense';

const Feed = React.lazy(() => import('./components/Feed/Feed')
  .then(({Feed}) => ({default: Feed})))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')
  .then(({DialogsContainer}) => ({default: DialogsContainer})))
const Audio = React.lazy(() => import('./components/Audio/Audio')
  .then(({Audio}) => ({default: Audio})))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')
  .then(({ProfileContainer}) => ({default: ProfileContainer})))
const SearchContainer = React.lazy(() => import('./components/Search/SearchContainer')
  .then(({SearchContainer}) => ({default: SearchContainer})))
const Settings = React.lazy(() => import('./components/Settings/Settings')
  .then(({Settings}) => ({default: Settings})))
const LoginPage = React.lazy(() => import('./components/Login/LoginPage')
  .then(({LoginPage}) => ({default: LoginPage})))


type MapStatePropsType = {
  initialized: boolean
}
type MapDispatchPropsType = {
  initializeApp: () => void
}
type AppPropsType = MapStatePropsType & MapDispatchPropsType


class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="App">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={'/feed'} render={WithSuspense(Feed)}/>
          <Route path={'/dialogs'} render={WithSuspense(DialogsContainer)}/>
          <Route path={'/audio'} render={WithSuspense(Audio)}/>
          <Route path={'/profile/:userId?'} render={WithSuspense(ProfileContainer)}/>
          <Route path={'/search'} render={WithSuspense(SearchContainer)}/>
          <Route path={'/settings'} render={WithSuspense(Settings)}/>
          <Route path={'/login'} render={WithSuspense(LoginPage)}/>
        </div>
        <Footer/>
      </div>
    )
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  initialized: state.app.initialized
})


let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {
    initializeApp
  })
)(App)

export const SamuraiJSApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer/>
      </BrowserRouter>
    </Provider>
  )
}