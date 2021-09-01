import React from "react";
import AllClients from "../../components/allClients/AllClients";

import styles from "./Clients.module.css";

const Clients = () => (
  <section className={`sec animeLeft ${styles.section}`}>
    <h3 className={styles.clients}>Nossos Clientes</h3>
    <div className={styles.divider} />

    <div className={styles.content}>
      <AllClients />
    </div>
    <div className={styles.divider} />
  </section>
);

export default Clients;
