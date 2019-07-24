import React from 'react';

let RecomendedNews = props =>
<section className="recomended-news">
  <h3 className="recomended-title">See also:</h3>
  <ul className="recomended-list">
    <li className="recomended-item">
      <a href="/article" className="recomended-link">
        <p className="title-news">Marvel’s Spider-Man Has an Iron Man Problem</p>
      </a>
    </li>
    <li className="recomended-item">
      <a href="/article" className="recomended-link">
        <p className="title-news">Amazon Is Watching</p>
      </a>
    </li>
    <li className="recomended-item">
      <a href="/article" className="recomended-link">
        <p className="title-news">Facebook’s Libra Masterplan</p>
      </a>
    </li>
  </ul>
</section>

export default RecomendedNews;