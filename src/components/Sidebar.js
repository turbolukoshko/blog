import React from 'react';
import {connect} from 'react-redux';

class Sidebar extends React.Component {
  render() {
    return( 
      <aside className="sidebar">
        <h3 className="sidebar__title">Latest Posts</h3>
        <ul className="sidebar__list">
          {this.props.posts && this.props.posts.map(post =>
          <li className="sidebar__item" key={post.id}>
            <a href={`/article/${post.id}`} className="sidebar__link">
              {post.title}
            </a>
          </li>).slice(-5).reverse()}
        </ul>
      </aside>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    posts: state.posts.payload && state.posts.payload.posts
  }
}

export default connect(mapStateToProps)(Sidebar);