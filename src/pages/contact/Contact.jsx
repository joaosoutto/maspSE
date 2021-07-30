import React from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`sec animeLeft ${styles.section}`}>
      <div className={styles.left}>
        <div>
          <h3 className={styles.name}>Tadeu de Souza</h3>
          <h4 className={styles.role}>Consultor Técnico</h4>
          <h4 className={styles.phone}>+ 55 (31) 9 8513.5035</h4>
          <h4 className={styles.email}>maspsolucoes@gmail.com</h4>
        </div>
        <div className={styles.divider} />
        <div>
          <h3 className={styles.name}>Lucielene de Almeida</h3>
          <h4 className={styles.role}>Analista Comercial</h4>
          <h4 className={styles.phone}>+ 55 (31) 9 8013.5034</h4>
          <h4 className={styles.phone}>+ 55 (31) 3466.9966</h4>
          <h4 className={styles.email}>masp.comercial@gmail.com</h4>
        </div>
      </div>
      <div className={styles.right}>
        <form>
          <div className={styles.inputs}>
            <div className={styles.inputDiv}>
              <label htmlFor="name">Nome </label>
              <input id="name" type="text" className={styles.input} />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="email">Email </label>

              <input id="email" type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.area}>
            <label htmlFor="message">Mensagem </label>
            <textarea id="message" className={styles.textarea} />
          </div>
          <button type="button" className={styles.submit}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
