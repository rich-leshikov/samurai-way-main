import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';

import {createField, Input, Textarea} from '../../../common/FormControls/FormControls';

import s from './ProfileDataForm.module.css'

import {ProfileType} from '../../../../redux/profile-reducer';


type PropsType = {
  profile: ProfileType
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({
                                                                                            handleSubmit,
                                                                                            profile,
                                                                                            error
                                                                                          }) => {
  return (
    <form
      className={s.profileDataForm}
      onSubmit={handleSubmit}
    >
      <div>
        <strong>Looking for a job: </strong>
        {
          createField('', 'lookingForAJob',
            [], Input, '', {type: 'checkbox'})
        }
      </div>
      <div>
        <strong>My professional skills:</strong>
        {
          createField('My professional skills', 'lookingForAJobDescription',
            [], Textarea, '', {type: 'textarea'})
        }
      </div>
      <div>
        <strong>About me:</strong>
        {
          createField('About me', 'aboutMe',
            [], Textarea, '', {type: 'textarea'})
        }
      </div>
      {/*<div>*/}
      {/*  <strong>Contacts:</strong>*/}
      {/*  {*/}
      {/*    Object.keys(props.profile.contacts).map(key => {*/}
      {/*      return (*/}
      {/*        <ProfileContact contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
      {/*      )*/}
      {/*    })*/}
      {/*  }*/}
      {/*</div>*/}
      <div>
        <button>Save changes</button>
      </div>
    </form>
  )
}


export const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>(
  {form: 'edit-profile'}
)(ProfileDataForm)