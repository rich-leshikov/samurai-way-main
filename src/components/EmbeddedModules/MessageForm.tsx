import React from 'react';

type MessageFormPropsType = {

}

export function MessageForm(props: MessageFormPropsType) {

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const addPost = () => {
    alert(newPostElement.current?.value)
  }

  return (
    <div>
      <div className="">
        <textarea ref={newPostElement}/>
      </div>
      <div className="">
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
}