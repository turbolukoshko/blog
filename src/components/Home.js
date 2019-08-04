import React from 'react';
import NewsList from './NewsList.js';
import Sidebar from './Sidebar';

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
    <SectionContent>
      <NewsList/>
      <Sidebar/>
    </SectionContent>
</Main>

export default HomePage;