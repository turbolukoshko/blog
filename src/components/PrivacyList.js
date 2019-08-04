import React from 'react';

let Privacy = props =>
<ul className="footer__list">
  <li className="footer__item"><a href="/term" className="footer__link">Term and conditions</a></li>
  <li className="footer__item"><a href="/privacy" className="footer__link">Privacy</a></li>
  {props.children}
</ul>

export default Privacy;