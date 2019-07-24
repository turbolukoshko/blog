import React from 'react';
import Article from './Article';
import RecomendedNews from './RecomendedNews';
import Comments from './Comments';
import FormComment from './FormComment';

let Container = props =>
<div className="container">
  {props.children}
</div>

let Main = props =>
<main className="main">
  {props.children}
</main>

let ArticlePage = props =>
<>
<Main>
  <Container>
    <Article/>
    <RecomendedNews/>
    <Comments/>
    <FormComment/>
  </Container>
</Main>
</>

export default ArticlePage;