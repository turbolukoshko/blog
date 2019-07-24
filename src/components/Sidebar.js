import React from 'react';
import {connect} from 'react-redux';

class Sidebar extends React.Component {
  render() {
    return( 
      <aside className="sidebar">
        <h3 className="sidebar-title"><span className="sidebar-title-icon"></span>Latest Posts</h3>
        <ul className="sidebar-list">
          {this.props.posts && this.props.posts.map(post =>
          <li className="sidebar-item" key={post.id}>
            <span className="sidebar-item-icon"></span>
          <a href="/article" className="sidebar-link">
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