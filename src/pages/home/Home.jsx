import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import AllClients from "../../components/allClients/AllClients";
import ServiceDiv from "../../components/sericeDiv/ServiceDiv";

const Home = () => (
  <section className="sec animeLeft">
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.text}>
          <h1>Projetamos e Executamos Soluções Elétricas</h1>
        </div>
      </div>

      <div className={styles.middle}>
        <h3>
          A <span>MASP</span> poderá desenvolver a solução necessária que sua
          empresa precisa. Com 25 anos de mercado, possuímos aproximadamente 500
          obras registradas! Conheça mais dos nossos serviços{" "}
          <Link className={styles.link} to="/servicos">
            <span>clicando aqui.</span>
          </Link>
        </h3>
      </div>

      <ServiceDiv />

      <div className={styles.clients}>
        <h3>Conheça alguns de nossos clientes:</h3>
        <div className={styles.allClients}>
          <AllClients />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
