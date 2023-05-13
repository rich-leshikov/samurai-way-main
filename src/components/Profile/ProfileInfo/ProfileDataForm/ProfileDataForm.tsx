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
      {/*{error && <div className={s.formSummaryError}>{error}</div>}*/}
      <div className={s.formSummaryError}>{error}</div>
      <div>
        <strong>Looking for a job: </strong>
        {
          createField('', 'lookingForAJob',
            [], Input, ' ', {type: 'checkbox'})
        }
      </div>
      <div>
        <strong>My professional skills: </strong>
        {
          createField('My professional skills', 'lookingForAJobDescription',
            [], Textarea, ' ', {type: 'textarea'})
        }
      </div>
      <div>
        <strong>About me: </strong>
        {
          createField('About me', 'aboutMe',
            [], Textarea, ' ', {type: 'textarea'})
        }
      </div>
      <div>
        <strong>Contacts:</strong>
        {
          Object.keys(profile.contacts).map(key => {
            return (
              <div key={key} className={s.profileContact}>
                <strong>{key}: {
                  createField(key, 'contacts.' + key, [], Input)
                }</strong>
              </div>
            )
          })
        }
      </div>
      <div>
        <div className={s.formButton}>
          <button>Save changes</button>
        </div>
      </div>
    </form>
  )
}


export const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>(
  {form: 'edit-profile'}
)(ProfileDataForm)