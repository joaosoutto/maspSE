import React from "react";

import styles from "./ServiceCard.module.css";

const ServiceCard = ({ src, service }) => (
  <div className={styles.container}>
    <img className={styles.img} alt="Foto do Serviço oferecido" src={src} />
    <div className={styles.service}>
      <h4>{service}</h4>
    </div>
  </div>
);

export default ServiceCard;
