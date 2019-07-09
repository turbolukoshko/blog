import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

let Wrapper = props =>
<div className="wrapper">
  {props.children}
</div>

let Container = props =>
<div className="container">
  {props.children}
</div>

let Header = props =>
<header className="header">
  {props.children}
</header>

let Logo = props =>
<div className="logo">
  <h1 className="title-logo"><a href="/" className="title-link">Blog</a></h1>
</div>

let Navigation = props =>
<nav className="nav">
  <ul className="nav-list">
    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
    <li className="nav-item article">
      <a href="/article" className="nav-link article">Categories</a>
      <ul className="nav-submenu">
        <li className="nav-item"><a href="/article" className="nav-link">Trips</a></li>
        <li className="nav-item"><a href="/article" className="nav-link">Tech</a></li>
        <li className="nav-item"><a href="/article" className="nav-link">Nature</a></li>
        <li className="nav-item"><a href="/article" className="nav-link">Animals</a></li>
      </ul>
    </li>
    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
    <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
  </ul>
</nav>

let UserBlock = props =>
<section className="user-block">
  <ul className="user-list">
    <li className="user-item">
      <a href="/register" className="nav-link user-link register">Register</a>
    </li>
    <li className="user-item">
      <a href="/sign-in" className="nav-link user-link sign-in">Sign in</a>
    </li>
  </ul>
</section>

let Main = props =>
<main className="main">
  {props.children}
</main>

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

let SectionSubscribe = props =>
<section className="subscribe">
  <h3 className="title-subscribe">Sign up for our newsletter</h3>
  <p className="text-subscribe">Get news by subscription</p>
  {props.children}
</section>

let NewsletterForm = props =>
<div className="form-subscribe">
  <input type="text" placeholder="Enter your email" className="input-subscribe"/>
  <button type="button" className="btn-subscribe">Subscribe</button>
</div>

let ShiftButtons = props =>
<div className="shift-btn">
  <a href="" className="btn-prev disabled">Previous</a>
  <a href="" className="btn-next">Next</a>
</div>

let Footer = props =>
<footer className="footer">
  {props.children}
</footer>

let FooterList = props =>
<ul className="footer-list">
  <li className="footer-item"><a href="" className="footer-link">Term and conditions</a></li>
  <li className="footer-item"><a href="/privacy" className="footer-link">Privacy</a></li>
  {props.children}
</ul>

let SocialLinks = props =>
<ul className="social-links">
  <li className="social-item"><a href="https://www.facebook.com/" className="social-link facebook" target="_blank">Facebook</a></li>
  <li className="social-item"><a href="https://www.twitter.com/" className="social-link twitter" target="_blank">Twitter</a></li>
  <li className="social-item"><a href="https://www.instagram.com/" className="social-link instagram" target="_blank">Instagram</a></li>
</ul>

let Copyright = props =>
<span className="copyright">&copy; A-level 2019</span>

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

let SectionContent = props =>
<section className="section-content">
  {props.children}
</section>

let Article = props =>
<article className="article">
  <div className="article-content">
    <h2 className="article-title">How I Created My Happiest Life</h2>
    <span className="article-theme"><a href="">Trips</a></span>
    <span className="article-date">01.01.1970</span>
    {props.children}
    {/* <img src="../images/news-item-1.png" alt="article-photo" className="article-img"/> */}
    <p className="article-inner-content">
    In May of 2017 my life changed forever. I had been unhappy for the better part of a year. 
    I had been involved in an unhealthy relationship, my health wasn’t in great shape, and I 
    didn’t feel as if my career had growth potential. At 23 years old, I felt as if I was doing 
    my life an injustice by passively choosing to be discontent.
    So I ended my relationship, quit my job, sold everything, and moved myself and my two cats 
    from Austin, Texas to Karlsruhe, Germany.
    Background
    Admitting to myself that I was unhappy with my life was the most difficult step, because it 
    forced me to make the hard decisions.
    The hardest conversation was ending my two-and-a-half year relationship; I would ultimately be 
    getting a divorce without the legality of the paperwork. But I knew that this wasn’t just a decision 
    for me. We had reached a cross-roads: get engaged or break up. And I could not in good faith let this 
    man propose knowing I couldn’t say yes with the entirety of my heart.
    We lived together, had co-signed cars together, and had bank accounts together. I knew it was going to 
    be messy. But the ability to outwardly admit my unhappiness was the first step towards creating my best 
    life. I wasn’t scared, because I knew that the benefits would outweigh the temporary chaos my life would 
    endure.
    Once I ended the relationship, it was time to find a job. In a foreign country. This was a bit 
    nerve-wracking. I had a lot of interviews, and I heard “No” a lot. This wasn’t necessarily due to 
    my lack of skills, but many companies wanted to hire someone who was already living in Germany. 
    Thus, I had to prove that I was worth the investment.
    Now I had to downsize my possessions. I was amazed at the amount of things I had accumulated over the
    last twenty-four years. I had to fit my entire life into two suitcases; this forced me to determine 
    what was truly important to me.
    There were a few things that were difficult to part with. I had a beautiful rose gold trumpet that 
    had accompanied me to the New York State Honor Band. It was my most prized possession, but I couldn’t 
    bring it to Germany. So I sold it to a wonderful family; the son was learning trumpet and wanted one 
    to call his own. I was proud to pass it on to someone who would cherish it as I had.
    I donated whatever else I could in the hopes that someone could find joy in owning the things that had 
    once made me happy.
    By decluttering my physical space, I had a lot less baggage (literally). I felt as though I had lost 
    twenty pounds. It’s amazing how simplifying my physical space had such a positive impact on my 
    emotional health.
    Now, I only bring things into my life that inspire me or bring me joy.
    </p>
  </div>
</article>

let Share = props =>
<div className="share">
  <span className="share-title">Share:</span>
  <SocialLinks/>
</div>

let RecomendedNews = props =>
<section className="recomended-news">
  <h3 className="recomended-title">See also:</h3>
  <ul className="recomended-list">
    <li className="recomended-item">
      <a href="/article" className="recomended-link">
        <img src="../images/news-item-1.png" alt="" className="recomended-img"/>
        <p className="title-news">Marvel’s Spider-Man Has an Iron Man Problem</p>
      </a>
    </li>
    <li className="recomended-item">
      <a href="/article" className="recomended-link">
        <img src="../images/news-item-1.png" alt="" className="recomended-img"/>
        <p className="title-news">Amazon Is Watching</p>
      </a>
    </li>
    <li className="recomended-item">
      <a href="/article" className="recomended-link">
        <img src="../images/news-item-1.png" alt="" className="recomended-img"/>
        <p className="title-news">Facebook’s Libra Masterplan</p>
      </a>
    </li>
  </ul>
</section>

let Comment = props =>
<section className="comment">
<h3 className="comment-title">Comments</h3>
  <div className="card-user">
    <img className="img-user" src="" alt=""/>
    <p className="user-name">John Doe</p>
    <p className="message">The big problem with the above three techniques is that 
      they require fixed height footers. Fixed heights are generally a bummer in web design. 
      Content can change. Things are flexible. Fixed heights are usually red flag territory. 
      Using flexbox for a sticky footer not only doesn't require any extra elements, but allows 
      for a variable height footer.
    </p>
    <span className="reply"><a href="" className="reply-link">Reply</a></span>
  </div>
  <div className="card-user">
    <img className="img-user" src="" alt=""/>
    <p className="user-name">John Doe</p>
    <p className="message">Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.
    </p>
    <span className="reply"><a href="" className="reply-link">Reply</a></span>
  </div>
</section>

let FormComment = props =>
<div className="form-comment">
  <textarea className="input-comment" placeholder="Add comments" rows="10" cols="45"></textarea>
  <button className="btn-comment">Send comment</button>
</div>

let PageNotFound = props =>
<section className="section-error">
  <Container>
    <div className="error-wrapper">
      <h1 className="error-title">Page Not Found :(</h1>
      <p className="error-content">
        We can't find the page you're looking for. You can either return to the previous page, visit our
        homepage or contact our support team.
      </p>
      <div className="btn-block">
        <a href="/" className="btn btn-home">Visit Homepage</a>
        <a href="/about" className="btn btn-about-us">About us</a>
      </div>
    </div>
  </Container>
</section>

let Home = props =>
<Main>
  <Container>
    <SectionContent>
      <ListNews/>
      <Sidebar/>
    </SectionContent>
    <ShiftButtons/>
  </Container>
</Main>

let ArticlePage = props =>
<>
<Main>
  <Container>
    <Article>
      <Slider/>
    </Article>
    <Share/>
    <RecomendedNews/>
    <Comment/>
    <FormComment/>
  </Container>
</Main>
</>

let RegisterPage = props =>
<div className="container">
  <section className="register-section">
    <h3 className="title-register">Register</h3>
    <div className="register-form">
      <label htmlFor="register-user-name" className="register-label">Username</label>
      <input type="text" id="register-user-name" className="register-input" placeholder="Enter your username"/>
      <label htmlFor="register-user-email" className="register-label">Email</label>
      <input type="text" id="register-user-emai" className="register-input" placeholder="Enter your email"/>
      <label htmlFor="register-password" className="register-label">Password</label>
      <input type="password" id="register-password" className="register-input" placeholder="Enter your password"/>
      <span className="register-password-requirement">Minimum length is 8 characters</span>
      <label htmlFor="register-agreement">
        <input type="checkbox" id="register-agreement" className="register-agreement"/>
          I accept the <a href="">Term and conditions</a>
      </label>
      <button type="submit" className="btn-register">Confirm</button>
    </div>
  </section>
</div>

let SignInPage = props =>
<div className="container">
  <section className="register-section">
    <h3 className="title-register">Sign in</h3>
    <div className="register-form">
      <label htmlFor="register-user-name" className="register-label">Username</label>
      <input type="text" id="user-name" className="register-input" placeholder="Enter your username"/>
      <label htmlFor="register-password" className="register-label">Password</label>
      <input type="password" id="password" className="register-input" placeholder="Enter your password"/>
      <span className="forgot-password"><a href="/password-reset" className="forgot-password">Forgot password?</a></span>
      <button type="submit" className="btn-register">Confirm</button>
    </div>
  </section>
</div>

let PasswordResetPage = props =>
  <Container>
    <section className="section-password-reset">
      <h3 className="title-reset">Reset password</h3>
      <div className="form-reset">
        <label htmlFor="reset-password" className="reset-label">Email</label>
        <input type="text" id="reset-password" className="reset-password" placeholder="Enter your email"/>
        <button type="submit" className="btn-reset">Confirm</button>
      </div>
    </section>
  </Container>

let AboutPage = props =>
<>
<section className="section-about section-content">
  <Container>
    <h3 className="title-about title">About</h3>
    <p className="content-about content">
    This resource was created specifically for you so that you are the first to find out 
    the latest news and articles. Our task is to give you more moments when you can think 
    about nothing and not worry.
    </p>
    <h3 className="advantage-inner-title">Our advantages:</h3>
    <ul className="list-advantage list">
      <li className="advantage-item item">
        <img src="../images/network.png" className="advantage-img" alt="advantege"/>
        <p className="adventage-info">Our blog is accessible from anywhere in the world.</p>
      </li>
      <li className="advantage-item item">
        <img src="../images/notification.png" className="advantage-img" alt="advantege"/>
        <p className="adventage-info">Alert system. Lest you miss important articles.</p>
      </li>
      <li className="advantage-item item">
        <img src="../images/newspaper.png" className="advantage-img" alt="advantege"/>
        <p className="adventage-info">Most relevant articles</p>
      </li>
    </ul>
  </Container>
</section>
<SectionSubscribe>
    <Container>
      <NewsletterForm/>
    </Container>
</SectionSubscribe>
</>

let ContactPage = props =>
<section className="section-contact">
  <Container>
    <h3 className="contact-title">Our contacts</h3>
    <div className="contact-info">
    <SocialLinks/>
    <img src="../images/map.jpg" className="contant-map" alt="map"/>
    </div>
  </Container>
</section>

let Slider = props =>
<section className="section-slider">
  <div className="slider-item slide-1"></div>
  <div className="slider-item slide-2"></div>
  <div className="slider-item slide-3"></div>
  <div className="slider-item slide-4"></div>
</section>


function App() {
  return (
    <>
    <Wrapper>
      <Header>
        <Container>
          <Logo/>
          <Navigation/>
          <UserBlock/>
        </Container>
      </Header>
      <Router history={createHistory()}>
        <div class="content">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/article" component={ArticlePage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/sign-in" component={SignInPage}/>
            <Route path="/password-reset" component={PasswordResetPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/privacy" component={Slider}/> 
            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    </Wrapper>
    <Footer>
      <Container>
        <FooterList/>
        <Copyright/>
        <SocialLinks/>
      </Container>
    </Footer>
    </>
  );
}

export default App;
