import React from 'react';
import {connect} from 'react-redux';

class Article extends React.Component {
  render(){
    return(
      <article className="article">
        {this.props.posts && this.props.posts.map(post =>
                <div className="article-content" key={post.id}>
                    <h2 className="article-title">
                      {post.title}
                    </h2>
                    <p>{post.text}</p>
                </div>)}
      </article>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    posts: state.posts.payload && state.posts.payload.posts
  }
}

export default connect(mapStateToProps)(Article);