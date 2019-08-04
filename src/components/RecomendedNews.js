import React from 'react';

class RecomendedNews extends React.Component {
  render() {
    return(
      <section className="recomended-news">
        <h3 className="recomended__title">See also our latest articles:</h3>
        <ul className="recomended__list">
          {this.props.posts && this.props.posts.map(post => 
            <li className="recomended__item">
              <a href={`/article/${post.id}`} className="recomended__link">
                <p className="news__title">{post.title}</p>
              </a>
            </li>
          ).slice(-3).reverse()}
        </ul>
      </section>
    );
  }
}

export default RecomendedNews;