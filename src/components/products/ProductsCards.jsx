import React from "react";

import styles from "./ProductsCards.module.css";

const ProductsCards = ({ icon, name }) => (
  <div className={styles.card}>
    <span>{icon}</span>
    <p>{name}</p>
  </div>
);

export default ProductsCards;
