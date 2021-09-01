import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
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
      <div className={styles.foot}>
        <div className={styles.contats}>
          <h4>Tadeu de Souza - (31) 9 8013.5035</h4>
          <h4>Lucielene de Almeida - (31) 9 8013.5034</h4>
          <h4 className={styles.end}>
            Rua Naná Kubitschek Soares, 82 - Bairro Alvorada - Sabará/MG - CEP
            34700-160
          </h4>
        </div>
        <div className={styles.rights}>
          © 2021 Masp Soluções Elétricas - Todos os direitos reservados.
        </div>
      </div>
    </div>
  </section>
);

export default Home;
