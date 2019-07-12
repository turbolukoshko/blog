import React from 'react';

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

let ShiftButtons = props =>
<div className="shift-btn">
  <a href="" className="btn-prev disabled">Previous</a>
  <a href="" className="btn-next">Next</a>
</div>

let ListNews = props =>
<>
  <ul className="list-news">
    <li className="item-news">
      <a href="/article" className="link-news">
        <div className="content-news">
          <img src="../images/news-item-1.png" alt="news" className="img-news"/>
          <p className="title-news">You Can Now Get Your Whole Genome Sequenced for Less Than an iPhone</p>
          <span className="date-news">01.01.1970</span>
          <a href="/article" className="read-news">Read more</a>
        </div>
      </a>
    </li>
    <li className="item-news">
      <a href="/article" className="link-news">
        <div className="content-news">
          <img src="../images/news-item-2.png" alt="news" className="img-news"/>
          <p className="title-news">But will people buy it — and is all that genetic information actually worth it?</p>
          <span className="date-news">01.01.1970</span>
          <a href="/article" className="read-news">Read more</a>
        </div>
      </a>
    </li>
    <li className="item-news">
      <a href="/article" className="link-news">
        <div className="content-news">
          <img src="../images/news-item-1.png" alt="news" className="img-news"/>
          <p className="title-news">Managing Chronic Illness in the Workplace</p>
          <span className="date-news">01.01.1970</span>
          <a href="/article" className="read-news">Read more</a>
        </div>
      </a>
    </li>
    <li className="item-news">
      <a href="/article" className="link-news">
        <div className="content-news">
          <img src="../images/news-item-2.png" alt="news" className="img-news"/>
          <p className="title-news">You read a lot. We like that.</p>
          <span className="date-news">01.01.1970</span>
          <a href="/article" className="read-news">Read more</a>
        </div>
      </a>
    </li>
  </ul>
  {props.children}
</>

let Sidebar = props =>
<aside className="sidebar">
  <h3 className="sidebar-title">Most Popular Articles</h3>
  <ul className="sidebar-list">
    <li className="sidebar-item"><a href="/article" className="sidebar-link">When You’re Truly Good at Your Job, You Want to Hear the Ways You Suck at It</a></li>
    <li className="sidebar-item"><a href="/article" className="sidebar-link">One of the most underrated ways to measure your professional success</a></li>
    <li className="sidebar-item"><a href="/article" className="sidebar-link">The Worst Advice I Ever Received Was “Follow Your Passion”</a></li>
    <li className="sidebar-item"><a href="/article" className="sidebar-link">The Case for Generalists</a></li>
    <li className="sidebar-item"><a href="/article" className="sidebar-link">A Goat Showed Me the True Meaning of Being Open-Hearted</a></li>
  </ul>
</aside>

let HomePage = props =>
<Main>
  <Container>
    <SectionContent>
      <ListNews/>
      <Sidebar/>
    </SectionContent>
    <ShiftButtons/>
  </Container>
</Main>

export default HomePage;