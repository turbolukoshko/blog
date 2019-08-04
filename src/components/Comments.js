import React from 'react';

class Comments extends React.Component {
  render() {
    console.log(this.props);
    return(
      <section className="section-comments">
        <h3 className="comments__title">Comments</h3>
        {this.props.children}
        {this.props.comments && this.props.comments.map(comment =>
        <> 
          <div className="comments__card-user">
            <p className="comments__user-name">John Doe</p>
            <p className="comments__message">{comment.text}</p>
            {/* <span className="reply"><a href="/reply" className="reply-link">Reply</a></span> */}
          </div>
        </>).reverse()}
      </section>
    );
  }
}

export default Comments;