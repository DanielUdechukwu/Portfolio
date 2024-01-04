import React from "react";
import "../main.css";
import Nav from "../components/Nav";

const Contact = () => {
  return (
    <>
      <Nav />
      <section>
        <div class="w-[80%] mx-auto">
          <h4 class="contact-text">
            Contact <span>Me</span>
          </h4>
          <form action="" id="form">
            <div class="input-area">
              <input
                className="outline-none"
                type="hidden"
                name="to_name"
                value="Daniel"
              />

              <label class="walahi" for="from_name">
                What's your name?
              </label>
              <input
                className="outline-none"
                type="text"
                name="from_name"
                id=""
                required
                placeholder="Full name"
              />
            </div>
            <div class="input-area">
              <label for="reply_to">How can I reach you?</label>
              <input
                className="outline-none"
                type="email"
                name="reply_to"
                id=""
                required
                placeholder="hey@gmail.com"
              />
            </div>
            <div class="input-area">
              <label for="message">What's your message?</label>
              <textarea
                className="outline-none"
                name="message"
                id=""
                required
                placeholder="Hi Daniel, let's work!"
              ></textarea>
            </div>

            <div class="form-button">
              <button id="form-button" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
