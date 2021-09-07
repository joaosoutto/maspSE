import React from "react";

import ServiceCard from "../serviceCard/ServiceCard";

import inspecao from "../../assets/serviços/inspecao.jpg";
import aterramento from "../../assets/serviços/aterramento.png";
import treinamento from "../../assets/treinamento.jpeg";
import grupogerados from "../../assets/serviços/grupogerados.png";
import elab from "../../assets/serviços/elab.png";
import pararaio from "../../assets/serviços/pararaio.jpg";
import mais from "../../assets/serviços/mais.png";

import styles from "./ServiceDiv.module.css";

const ServiceDiv = () => (
  <div className={styles.services}>
    <div className={styles.card}>
      <ServiceCard src={inspecao} service="Inspeções Elétricas" />
      <ServiceCard src={aterramento} service="Aterramento" />
      <ServiceCard src={grupogerados} service="Instalação e Manutenção em Grupo Gerador" />
      <ServiceCard src={elab} service="Elaboração de Projeto Elétrico do Canteiro de Obras" />
      <ServiceCard src={pararaio} service="Para-Raio" />
      <ServiceCard
        src={treinamento}
        service="Treinamento das Normas Regulamentadoras - NR's"
      />
      {/* <ServiceCard src={mais} service="E muito mais..." /> */}
    </div>
  </div>
);

export default ServiceDiv;
