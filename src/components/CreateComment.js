import React, {useState} from 'react';
import {graphqlCreateCommentThunk} from '../App';
import { connect } from 'react-redux';

let CreateComment = (props) => {
  console.log(props);

  let [text, setText] = useState('');

  return(
    <section className="leave-comment">
      <p className="title leave-comment__title">Leave a comment</p>
      <div className="form-create__comment">
        <label htmlFor="create-post__title" className="label">Enter comment:</label>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Text" id="create-post__title" className="input comments__input"/>
        <button onClick={ () => props.createComment(props.postId, text)} className="btn create-comment__btn">Create comment</button>
      </div>
    </section>
  );
}

let mapDispatchToProps = {
  createComment: graphqlCreateCommentThunk
}

export default connect(null, mapDispatchToProps)(CreateComment);