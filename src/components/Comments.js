import React from 'react';

let Comments = props =>
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
    <span className="reply"><a href="/reply" className="reply-link">Reply</a></span>
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
    <p className="user-name">John Doe</p>
    <p className="message">Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.
    </p>
    <span className="reply"><a href="/reply" className="reply-link">Reply</a></span>
  </div>
</section>

export default Comments;