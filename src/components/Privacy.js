import React from 'react';

let Container = props =>
<div className="container">
  {props.children}
</div>

let PrivacyPage = props =>
<section className="section-privacy">
  <Container>
    <h2 className="privacy-title">Privacy Policy</h2>
    <p className="privacy-content">This privacy policy (“Privacy Policy”) applies to all visitors and 
      users of the Blog.com hosted services and websites (collectively, the “Website” or “Websites”), 
      which are offered by Blog B.V. and/or any of its affiliates (“Blog” or “we” or “us”). 
      Self-managed Blog instances are not included in the definition of Website. Please read this 
      Privacy Policy carefully. By accessing or using any part of the Websites, you acknowledge you have 
      been informed of and consent to our practices with regard to your personal information and data.
      Blog is an open source project and collaborative community, as well as a company. 
      This means that many portions of our Websites, including information you voluntarily provide, 
      will be public-facing for the open sharing of innovative developments, ideas, and information that 
      makes our collaborative community so great. While we are committed to open sharing, we strive to 
      respect the privacy of individual community members and will minimize the information we collect 
      and share. If you do not want to share your information, including personally identifiable 
      information, with other community members and the public, please be thoughtful as to how you 
      interact with our Websites and what information you provide through the Websites (for example, 
      through creating a public profile, project contributions, comments, and blog posts).
    </p>
  </Container>
</section>

export default PrivacyPage;