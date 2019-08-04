import React from 'react';
class Article extends React.Component {
  render(){
    console.log(this.props);
    return(
      <article className="article">
          <h2 className="article__title">{this.props.post && this.props.post.title}</h2>
          <h2 className="date-news article__num">Article #{this.props.post && this.props.post.id}</h2>
          <h2 className="date-news article__num">Created: {this.props.post && this.props.post.age}</h2>
          <p className="article__content">{this.props.post && this.props.post.text}</p>
      </article>
    );
  }
}

export default Article;