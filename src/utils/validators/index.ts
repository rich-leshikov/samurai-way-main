export const required = (value: string) => {
  return value ? undefined : 'Field is required!'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  return value.length <= maxLength ? undefined : `Max length of message is ${maxLength} symbols!`
}

export const minLength = (value: string) => {
  return value ? undefined : 'Enter your message!'
}