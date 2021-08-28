import { useState } from 'react';

import Comment from "./Comment";

function Post(props) {

  const [comments, setComments] = useState([{text: 'Bom post!'}]);
  const [newCommentText, setNewCommentText] = useState({text: ''});

  function handleSubmit(e){
    e.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText({text: ''});

  }

  function handleTextChange(e) {
    setNewCommentText({text: e.target.value})
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <form onSubmit={handleSubmit}>
        <input value={newCommentText.text} onChange={handleTextChange} />
        <button  type="submit">Comentar</button>
      </form>
      {
        comments.map((e, i) => {
          return <Comment key={i} text={comments[i].text} />
        })
      }
    </div>
  );
}

export default Post;
