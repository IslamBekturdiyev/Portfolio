"use client";
import styles from "@/components/styles/about.module.css";
import AnimatedText from "@/components/animations/textanimation";
import PageWrapper from "@/components/PageWrapper";
import transition from "@/components/animations/transition";
import { useState } from "react";
import $ from 'jquery';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    email: false,
    message: false,
  });

  console.log(error);

  const handleChange = (e) => {
    const isValidName = /^[A-Za-z]*$/.test(e.target.value);

    if (isValidName) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: e.target.value,
      }));
    }
  };

  const handleChangeEmail = (e) => {
    // Regular expression for email validation
    const req =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const isValid = req.test(e.target.value);
    // Test the email against the regular expression
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: e.target.value,
    }));

    if (isValid) {
      setError((prevError) => ({
        ...prevError,
        email: false,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        email: true,
      }));
    }
  };

  const handleMessage = (e) => {
    const value = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      message: value,
    }));

    if (value.length > 2) {
      setError((prevError) => ({
        ...prevError,
        message: false,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        message: true,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //token
    const telegram_bot_id = "6630446572:AAF_VZ7luIiYu-o834JIzt33NB2IfgE_vdw";
    //chat id
    const chat_id = 1859769829;

    const message = "Name: " + formData.name + "\nEmail: " + formData.email + "\nMessage: " + formData.message;

    const settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    };

    $.ajax(settings).done(function() {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
  });

  };

  return (
    <PageWrapper>
      <section className="container page">
        <div className={styles.contact_grid}>
          <form className={styles.grid_form}>
            <div className={styles.group}>
              <input
                type="text"
                required="required"
                value={formData.name}
                onChange={handleChange}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label
                className={error.name ? styles.errorLabel : styles.correctForm}
              >
                Your name
              </label>
            </div>

            <div className={styles.group}>
              <input
                type="email"
                required="required"
                value={formData.email}
                onChange={handleChangeEmail}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label
                className={error.email ? styles.errorLabel : styles.correctForm}
              >
                Your email
              </label>
            </div>

            <div className={styles.group}>
              <textarea
                type="textarea"
                rows="5"
                required="required"
                value={formData.message}
                onChange={handleMessage}
              ></textarea>
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label
                className={
                  error.message ? styles.errorLabel : styles.correctForm
                }
              >
                Share your thoughts
              </label>
            </div>

            <button type="submit" className={styles.cta} onClick={handleSubmit}>
              <span>Just send</span>
              <svg viewBox="0 0 13 10" height="15px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </form>

          <div className={styles.contact_text}>
            <AnimatedText
              text="Love to hear from you"
              classname="upper-bold-text"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default transition(ContactPage);
