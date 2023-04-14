import React from 'react';
import s from './ProfileStatus.module.css'


type ProfileStatusPropsType = {
  aboutMe: string
}
type ProfileStatusStateType = {
  editMode: boolean
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state: ProfileStatusStateType = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div className={s.profileStatus}>
        {
          !this.state.editMode &&
          <p onDoubleClick={this.activateEditMode}>{this.props.aboutMe}</p>
        }
        {
          this.state.editMode &&
          <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.aboutMe}/>
        }
      </div>
    )
  }
}