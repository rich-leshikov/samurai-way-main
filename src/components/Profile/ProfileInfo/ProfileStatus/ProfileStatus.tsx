import React from 'react';
import s from './ProfileStatus.module.css'
import {ThunkType} from '../../../../redux/redux-store';


type ProfileStatusPropsType = {
  status: string
  changeStatus: (status: string) => ThunkType
}
type ProfileStatusStateType = {
  editMode: boolean
  status: string
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state: ProfileStatusStateType = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = (status: string) => {
    this.setState({
      editMode: false
    })
    this.props.changeStatus(status)
  }

  render() {
    return (
      <div className={s.profileStatus}>
        {
          !this.state.editMode &&
          <p onDoubleClick={this.activateEditMode}>{this.state.status}</p>
        }
        {
          this.state.editMode &&
          <input
            autoFocus={true}
            onChange={(e) => this.setState({...this.state, status: e.currentTarget.value})}
            onBlur={(e) => this.deactivateEditMode(e.currentTarget.value)}
            value={this.state.status}
          />
        }
      </div>
    )
  }
}