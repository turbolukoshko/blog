import React from 'react';

let CategoriesPage = props =>
<section className="section-categories">
  <ul className="categories-list">
    <li className="categories-item">
      <a href="/article" className="categories-link">Trips</a>
    </li>
    <li className="categories-item">
      <a href="/article" className="categories-link">Tech</a>
    </li>
    <li className="categories-item">
      <a href="/article" className="categories-link">Nature</a>
    </li>
    <li className="categories-item">
      <a href="/article" className="categories-link">Animals</a>
    </li>
  </ul>
</section>

export default CategoriesPage;