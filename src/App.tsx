import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {Feed} from './components/Feed/Feed';
import {Audio} from './components/Audio/Audio';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {SearchContainer} from './components/Search/SearchContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {LoginPage} from './components/Login/LoginPage';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';


type MapStatePropsType = {
  initialized: boolean
}
type MapDispatchPropsType = {
  initializeApp: () => void
}
type AppPropsType = MapStatePropsType & MapDispatchPropsType


class AppContainer extends React.Component<AppPropsType> {
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
          <Route path={'/feed'} render={() => <Feed/>}/>
          <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
          <Route path={'/audio'} render={() => <Audio/>}/>
          <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
          <Route path={'/search'} render={() => <SearchContainer/>}/>
          <Route path={'/settings'} render={() => <Settings/>}/>
          <Route path={'/login'} render={() => <LoginPage/>}/>
        </div>
        <Footer/>
      </div>
    )
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  initialized: state.app.initialized
})


export const App = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {
    initializeApp
  })
)(AppContainer)
