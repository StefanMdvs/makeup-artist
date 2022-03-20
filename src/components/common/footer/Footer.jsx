import React from "react";

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-separator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            SM Web Services
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            adresaemail@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            07711946781
          </section>
          <section className="footer-info__contact">
            Contact me
          </section>
        </section>
      </section>
      <hr className="footer-separator" />
    </section>
  )
}

export default Footer;