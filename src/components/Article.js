import React from 'react';


let Container = props =>
<div className="container">
  {props.children}
</div>

let Main = props =>
<main className="main">
  {props.children}
</main>

let SocialLinks = props =>
<ul className="social-links">
  <li className="social-item"><a href="https://www.facebook.com/" className="social-link facebook" target="_blank">Facebook</a></li>
  <li className="social-item"><a href="https://www.twitter.com/" className="social-link twitter" target="_blank">Twitter</a></li>
  <li className="social-item"><a href="https://www.instagram.com/" className="social-link instagram" target="_blank">Instagram</a></li>
</ul>


let Article = props =>
<article className="article">
  <div className="article-content">
    <h2 className="article-title">How I Created My Happiest Life</h2>
    <span className="article-theme"><a href="">Trips</a></span>
    <span className="article-date">01.01.1970</span>
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
    <div className="card-comment">
      <p className="user-name">John Doe</p>
      <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptates laborum eligendi distinctio suscipit iure esse magnam possimus obcaecati 
        incidunt ut error praesentium aspernatur, quia vel nam est fugiat, quos alias.
      </p>
    </div>
    <div className="card-comment">
      <p className="user-name">John Doe</p>
      <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptates laborum eligendi distinctio suscipit iure esse magnam possimus obcaecati 
        incidunt ut error praesentium aspernatur, quia vel nam est fugiat, quos alias.
      </p>
    </div>
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

let ArticlePage = props =>
<>
<Main>
  <Container>
    <Article/>
    <Share/>
    <RecomendedNews/>
    <Comment/>
    <FormComment/>
  </Container>
</Main>
</>

export default ArticlePage;