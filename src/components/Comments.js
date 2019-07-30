import React from 'react';
import SubComments from './SubComments';

class Comments extends React.Component {
  render() {
    console.log(this.props);
    return(
      <section className="comment">
      <h3 className="comment-title">Comments</h3>
      {this.props.comments && this.props.comments.map(comment =>
      <> 
        <div className="card-user">
          <img className="img-user" src="" alt=""/>
          <p className="user-name">John Doe</p>
          <p className="message">{comment.text}</p>
          <span className="reply"><a href="/reply" className="reply-link">Reply</a></span>
        </div>
        <SubComments/>
      </>)}
      </section>
    );
  }
}

export default Comments;