import React from 'react';

type MessageFormPropsType = {
  addMessage: (message: string) => void,
}

export function MessageForm(props: MessageFormPropsType) {

  const newMessageElement = React.createRef<HTMLTextAreaElement>()

  const addMessage = () => {
    if (newMessageElement.current) {
      props.addMessage(newMessageElement.current.value)
    }
  }

  return (
    <div>
      <div className="">
        <textarea ref={newMessageElement}/>
      </div>
      <div className="">
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
}