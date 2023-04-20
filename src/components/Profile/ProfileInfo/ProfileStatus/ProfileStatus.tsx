import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css'
import {ThunkType} from '../../../../redux/redux-store';
import {setStatus} from '../../../../redux/profile-reducer';


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
      ...this.state,
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      ...this.state,
      editMode: false
    })
    this.props.changeStatus(this.state.status)
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>, snapshot?: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        ...this.state,
        status: this.props.status
      })
    }
  }
  render() {
    return (
      <div className={s.profileStatus}>
        {
          !this.state.editMode &&
          <p onDoubleClick={this.activateEditMode}>{this.props.status}</p>
        }
        {
          this.state.editMode &&
          <input
            autoFocus={true}
            onChange={(e) => this.onStatusChange(e)}
            onBlur={this.deactivateEditMode}
            value={this.state.status}
          />
        }
      </div>
    )
  }
}