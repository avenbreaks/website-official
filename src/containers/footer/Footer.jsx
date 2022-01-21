import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Open Edgeware is platform open source to  <br /> create DAPPs easily</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>About</h4>
        <p>Overons</p>
        <p>Social Ambassador</p>
        <p>Git Ambassador</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Backers</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Discord</p>
        <p>Twitter</p>
        <p>Telegram</p>
        <p>Github</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Gitshock Edgeware. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
