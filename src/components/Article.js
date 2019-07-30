import React from 'react';
class Article extends React.Component {
  render(){
    console.log(this.props);
    return(
      <article className="article">
        <div className="article-content">
          <h2 className="article-title">{this.props.post && this.props.post.title}</h2>
          <h2 className="date-news">Article #{this.props.post && this.props.post.id}</h2>
          <p>{this.props.post && this.props.post.text}</p>
        </div>
      </article>
    );
  }
}

export default Article;