import React, {useState} from 'react';
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
    <section className="create-post">
      <h3 className="title create__title">Create Post</h3>
      <div className="form-create">
        <label htmlFor="create-post__title" className="label">Enter title:</label>
        <input type="text" value={title} onChange={ (event) => setTitle(event.target.value) } placeholder="Post title" id="create-post__title" className="input"/>
        <label htmlFor="create-post__content" className="label">Enter content:</label>
        <textarea onChange={ (event) => setText(event.target.value)} placeholder="Content" id="create-post__content" className="input">{text}</textarea>
        <button onClick={handleClick} className="btn btn-create create-post__btn">Create post</button>
      </div>
    </section>
  );
}

let mapDispatchToProps = {
    createPost: graphqlNewPostThunk,
}

export default connect(null, mapDispatchToProps)(CreatePost);