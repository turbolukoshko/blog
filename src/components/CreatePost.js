import React, {Component, useState} from 'react';
import {graphqlNewPostThunk} from '../App';
import { connect } from 'react-redux';

let CreatePost = (props) => {
  let [title, setTitle] = useState('');
  let [text, setText] = useState('');

  function addPost(){
    return props.createPost(title, text);
  }

  function redirectToHome(){
    return props.history.push('/');
  }

  function handleClick(event) {
    addPost();
    redirectToHome();
  }

  return(
    <section className="create-post container">
      <h3 className="title title-create">Create Post</h3>
      <div className="form-create">
        <label htmlFor="create-post-title" className="post-label">Enter title:</label>
        <input type="text" value={title} onChange={ (event) => setTitle(event.target.value) } placeholder="Post title" id="create-post-title" className="input"/>
        <label htmlFor="create-post-content" className="textarea-label">Enter content:</label>
        <textarea onChange={ (event) => setText(event.target.value)} placeholder="Content" id="create-post-content" className="input">{text}</textarea>
        <button onClick={handleClick} className="btn btn-create">Create post</button>
      </div>
    </section>
  );
}

let mapDispatchToProps = {
    createPost: graphqlNewPostThunk,
}

export default connect(null, mapDispatchToProps)(CreatePost);