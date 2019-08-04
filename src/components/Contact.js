import React from 'react';
import MyMapComponent from './Map';

let ContactPage = props =>
<section className="section-contact">
    <h3 className="contact__title">Our contacts</h3>
    <div className="map">
      <MyMapComponent isMarkerShown />
    </div>
</section>

export default ContactPage;