import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="content">
          <div class="footer__icons">
            <a class="brand__icon brand__icon--footer" href="http://facebook.com" target="blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="brand__icon brand__icon--footer" href="http://twitter.com" target="blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="brand__icon brand__icon--footer" href="http://gmail.com" target="blank">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a class="brand__icon brand__icon--footer" href="http://pinterest.com" target="blank">
              <i class="fab fa-pinterest"></i>
            </a>
            <a class="brand__icon brand__icon--footer" href="http://instagram.com" target="blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="brand__icon brand__icon--footer" href="https://stumbleupon.com/" target="blank">
              <i class="fab fa-stumbleupon"></i>
            </a>
            <a class="brand__icon brand__icon--footer" href="http://rss.com" target="blank">
              <i class="fas fa-rss"></i>
            </a>
          </div>

          <div class="footer__copyright">© 2020 Illia Yurkevich</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
