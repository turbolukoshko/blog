import React from 'react';

let Container = props =>
<div className="container">
  {props.children}
</div>

let PrivacyPage = props =>
<section className="section-privacy">
  <Container>
    <h2 className="privacy-title">Privacy Policy</h2>
    <p className="privacy-content">Log Data
Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.

This Log Data is required to ensure the functionality of the site. With the help of the Log Data, errors in the application can be detected and removed. This is our legitimate interest (Art. 6, Section 1 f, EU-GDPR).

The Log Data is deleted regularly and is stored no longer than 14 days.
    </p>
  </Container>
</section>

export default PrivacyPage;