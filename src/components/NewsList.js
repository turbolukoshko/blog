import React from 'react';
import {connect} from 'react-redux';

class NewsList extends React.Component {
  render() { 
    console.log(this.props);
    return(
        <ul className="list-news">
          {this.props.posts && this.props.posts.map(post =>
          <li className="item-news" key={post.id}>
            <div className="content-news">
              <h3 className="title-news">
                <a href={`/article/${post.id}`} className="news-link">{post.title}</a>
              </h3>
              <p>{post.text}</p>
              <span className="date-news">{`post #${post.id}`}</span>
              <br/>
              <span className="date-news">added: {post.age}</span>
            </div>
          </li>).reverse()}
        </ul>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    posts: state.posts.payload && state.posts.payload.posts
  }
}

export default connect(mapStateToProps)(NewsList);