import React from 'react';
import MyMapComponent from './Map';

let Container = props =>
<div className="container">
  {props.children}
</div>

let ContactPage = props =>
<section className="section-contact">
  <Container>
    <h3 className="contact-title">Our contacts</h3>
    <MyMapComponent isMarkerShown />
  </Container>
</section>

export default ContactPage;