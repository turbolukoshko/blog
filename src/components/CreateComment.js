import React, {Component, useState} from 'react';
import {graphqlCreateCommentThunk} from '../App';
import { connect } from 'react-redux';

let CreateComment = (props) => {
  console.log(props);

  let [text, setText] = useState('');

  return(
    <section className="create-post container">
      <h3 className="title title-create">Create Comment</h3>
      <div className="form-create">
        <label htmlFor="create-post-title" className="post-label">Enter comment:</label>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Text" id="create-post-title" className="input"/>
        <button onClick={ () => props.createComment(props.postId, text)} className="btn btn-create">Create post</button>
      </div>
    </section>
  );
}

let mapDispatchToProps = {
  createComment: graphqlCreateCommentThunk
}

export default connect(null, mapDispatchToProps)(CreateComment);