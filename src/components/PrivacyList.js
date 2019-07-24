import React from 'react';

let Privacy = props =>
<ul className="footer-list">
  <li className="footer-item"><a href="/term" className="footer-link">Term and conditions</a></li>
  <li className="footer-item"><a href="/privacy" className="footer-link">Privacy</a></li>
  {props.children}
</ul>

export default Privacy;