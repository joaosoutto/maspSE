import React from "react";
import Form from "../../components/form/Form";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`sec animeLeft ${styles.section}`}>
      <div className={styles.form}>
        <Form />
      </div>
      <div className={styles.contacts}>
        <div>
          <h3 className={styles.name}>Tadeu de Souza</h3>
          <h4 className={styles.role}>Consultor Técnico</h4>
          <h4 className={styles.phone}>(31) 9 8013.5035</h4>
          <h4 className={styles.email}>maspsolucoes@gmail.com</h4>
        </div>
        <div>
          <h3 className={styles.name}>Lucielene de Almeida</h3>
          <h4 className={styles.role}>Analista Comercial</h4>
          <h4 className={styles.phone}>(31) 9 8013.5034 / (31) 3466.9966</h4>
          <h4 className={styles.email}>masp.comercial@gmail.com</h4>
        </div>
        <div className={styles.end}>
          <h5>Rua Naná Kubitschek Soares, 82</h5>{" "}
          <h5>Bairro Alvorada - Sabará/MG</h5> <h5>CEP 34700-160</h5>
        </div>
      </div>
    </section>
  );
};

export default Contact;
