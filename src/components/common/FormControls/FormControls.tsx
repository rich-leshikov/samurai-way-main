import React from 'react';
import s from './FormControls.module.css'
import {Field} from 'redux-form';


const FormControl = ({input, meta: {touched, error}, children}: any) => {
  const hasError = touched && error

  return (
    <div className={`${s.formControl} ${hasError && s.error}`}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props: any) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (type: string, placeholder: string, component: any, name: string, validators: Array<any>, props: {}, text: string) => {
  return <div><Field
    type={type}
    placeholder={placeholder}
    component={component}
    name={name}
    validate={validators}
    {...props}
  /> {text}</div>
}