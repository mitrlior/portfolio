import React, { useState, useRef } from "react";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";
import emailjs from "@emailjs/browser";
import ReactWhatsapp from "react-whatsapp";

import "./ContactMe.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameChangedHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  };

  const messageChangedHandler = (event) => {
    setMessage(event.target.value);
  };

  const linkedinUrl = "https://www.linkedin.com/in/lior-mitrany-4221711a5/";
  const gitUrl = "https://github.com/mitrlior";
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=972545427332&message=bla";

  const handleClick = (url) => {
    window.open(url);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mgh78lo",
        "template_wihc85v",
        form.current,
        "eWX_8JuaXVN0GfhGA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact-me">
      <h1>Contact me</h1>
      <div className="contact__ways reveal">
        <div className="contact__icon" onClick={() => handleClick(linkedinUrl)}>
          <i className="fa-brands fa-linkedin fa-2x" />
        </div>
        <div className="contact__icon" onClick={() => handleClick(gitUrl)}>
          <i className="fa-brands fa-square-github fa-2x" />
        </div>
        <div className="contact__icon" onClick={() => handleClick(whatsappUrl)}>
          <i className="fa-brands fa-square-whatsapp fa-2x" />
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-me__form reveal">
        <Input
          labelText="Name"
          labelClassName="contact-me__label"
          name="from_name"
          type="text"
          placeholder="Your Name"
          maxLength="20"
          value={name}
          onChangeHandler={nameChangedHandler}
        />
        <Input
          labelText="Email"
          labelClassName="contact-me__label"
          name="email"
          type="email"
          placeholder="Your Email"
          maxLength="30"
          value={email}
          onChangeHandler={emailChangedHandler}
        />
        <TextArea
          type="text"
          labelText="Message"
          name="message"
          rows="7"
          labelClassName="contact-me__label"
          placeholder="Your Message"
          maxLength="150"
          value={message}
          onChangeHandler={messageChangedHandler}
        />
        <Button
          type="submit"
          title="Send Email"
          className="form__button"
          onClick={(e) => sendEmail}
        />
      </form>
    </div>
  );
};

export default ContactMe;
