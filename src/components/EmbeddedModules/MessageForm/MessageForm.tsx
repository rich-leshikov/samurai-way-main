import React, {ChangeEvent} from 'react';

type MessageFormPropsType = {
  newMessageFromTextarea: string,
  updateTextarea: (message: string) => void,
  addMessage: () => void,
}

export function MessageForm(props: MessageFormPropsType) {

  const newMessageElement = React.createRef<HTMLTextAreaElement>()

  const updateTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateTextarea(e.currentTarget.value)
  }

  const addMessage = () => {
    props.addMessage()
  }

  return (
    <div>
      <div className="">
        <textarea value={props.newMessageFromTextarea} onChange={updateTextarea} ref={newMessageElement}/>
      </div>
      <div className="">
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
}