import React from 'react';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';

import s from './FormControls.module.css'
import { FieldValidatorType } from '../../../utils/validators';


type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}


const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
  const hasError = touched && error

  return (
    <div className={`${s.formControl} ${hasError && s.error}`}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = props => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = props => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField  = (
  placeholder: string | undefined,
  name: string,
  validators:  Array<FieldValidatorType>,
  component: React.FC<WrappedFieldProps>,
  text: ' ',
  props: {}
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        component={component}
        name={name}
        validate={validators}
        {...props}
      /> {text}</div>
  )
}

export type GetStringKeys<T> = Extract<keyof T, string>