import React from "react";

import emailjs from "emailjs-com";
import styles from "./Form.module.css";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "masp_666", e.target, "user_PcySoIcJ4sslnEe5t1BRH")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={sendEmail}>
        <div className={styles.inputDiv}>
          <label htmlFor="name">Nome </label>
          <input name="name" id="name" type="text" className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="email">Email </label>
          <input
            name="email"
            id="email"
            type="email"
            className={styles.input}
          />
        </div>
        <div className={styles.area}>
          <label htmlFor="message">Mensagem </label>
          <textarea name="message" id="message" className={styles.textarea} />
        </div>
        <button type="submit" className={styles.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
