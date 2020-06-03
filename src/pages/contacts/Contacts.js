import React from "react";
import "./Contacts.css";

class Contacts extends React.Component {
  render() {
    return (
      <section id="contact" class="contact">
        <div class="content">
          <div class="title">
            <p class="title__header">CONTACT US</p>
            <div class="title__divider"></div>
            <p
              class="title__description
                                title__description--contact"
            >
              If you have some questions, please, contact us.
            </p>
          </div>

          <div class="contact__container">
            <form action="" class="contact__form">
              <div class="contact__left">
                <input type="text" class="contact__name" placeholder="Name"></input>
                <input type="email" class="contact__email" placeholder="Email"></input>
                <input type="text" class="contact__subject" placeholder="Subject"></input>
              </div>

              <div class="contact__right">
                <textarea class="contact__textarea" placeholder="Message" rows="8"></textarea>
              </div>

              <button class="contact__submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
