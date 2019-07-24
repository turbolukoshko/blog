import React from 'react';
import NewsList from './NewsList.js';
import Sidebar from './Sidebar';

let Container = props =>
<div className="container">
  {props.children}
</div>

let Main = props =>
<main className="main">
  {props.children}
</main>

let SectionContent = props =>
<section className="section-content">
  {props.children}
</section>

let HomePage = props =>
<Main>
  <Container>
    <SectionContent>
      <NewsList/>
      <Sidebar/>
    </SectionContent>
  </Container>
</Main>

export default HomePage;