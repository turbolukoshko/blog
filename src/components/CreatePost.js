import React, {Component} from 'react';

class CreatePost extends Component {
  render(){
    return(
      <section className="create-post container">
        <h3 className="title">Create Post</h3>
        <div className="form-create">
          <label htmlFor="create-post-title" className="post-label">Enter title:</label>
          <input type="Title" placeholder="Post title" id="create-post-title" className="input"/>
          <label htmlFor="create-post-content" className="textarea-label">Enter content:</label>
          <textarea placeholder="Content" id="create-post-content" className="input"></textarea>
          <button className="btn btn-create">Create post</button>
        </div>
      </section>

    );
  }
}

export default CreatePost;