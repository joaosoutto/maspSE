import React from "react";

import ServiceCard from "../serviceCard/ServiceCard";

import inspecao from "../../assets/serviços/inspecao.jpg";
import aterramento from "../../assets/serviços/aterramento.png";
import eficiencia from "../../assets/serviços/eficiencia.jpg";
import grupogerados from "../../assets/serviços/grupogerados.png";
import pararaio from "../../assets/serviços/pararaio.jpg";
import more from "../../assets/serviços/more.jpg";

import styles from "./ServiceDiv.module.css";

const ServiceDiv = () => (
  <div className={styles.services}>
    <div className={styles.card}>
      <ServiceCard src={inspecao} service="Inspeções" />
      <ServiceCard src={aterramento} service="Aterramento" />
      <ServiceCard src={grupogerados} service="Manutenção em Grupo Geradores" />
      <ServiceCard src={pararaio} service="Para-Raio" />
      <ServiceCard
        src={eficiencia}
        service="Treinamento das Normas Regulamentadoras - NR's"
      />
      <ServiceCard src={more} service="E muito mais..." />
    </div>
  </div>
);

export default ServiceDiv;
