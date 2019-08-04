import React from 'react';
import {connect} from 'react-redux';

class NewsList extends React.Component {
  render() { 
    console.log(this.props);
    return(
        <ul className="news__list">
          {this.props.posts && this.props.posts.map(post =>
          <li className="news__item" key={post.id}>
            <div className="news__item-content">
              <h3 className="news__title">
                <a href={`/article/${post.id}`} className="news__link">{post.title}</a>
              </h3>
              <p className="news__text">{post.text}</p>
              <div className="news__controls">
                <a href={`/article/${post.id}`} className="btn news__btn-read">Read more</a>
                <span className="date-news">{`post #${post.id}`}</span>
                <span className="date-news">added: {post.age}</span>
              </div>
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