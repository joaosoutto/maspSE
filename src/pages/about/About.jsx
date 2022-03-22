import React from 'react';

import styles from './About.module.css';
import raio from '../../assets/raio1.png';

const About = () => (
  <section className={`sec animeLeft ${styles.section}`}>
    <div className={styles.content}>
      <p>
        A <span className={styles.name}>MASP</span> é uma empresa especializada
        em prover soluções de consultoria em instalações elétricas, proteção
        contra descargas atmosféricas <span>(SPDA)</span>, aterramento elétrico
        e treinamentos para as mais diversas necessidades.
      </p>
      <p>
        Com equipe de profissionais altamente preparados e capacitados,
        garantimos a excelência dos serviços prestados com qualidade,
        confiabilidade e precisão <span>técnica</span>.
      </p>
      <p>
        Nossos projetos são desenvolvidos e inspirados no{' '}
        <span>Método de Análise e Solução de Problemas</span>, onde o que se
        pretende é maximizar os resultados e minimizar os custos envolvidos.
      </p>
      <h3>
        Com 30 anos de mercado e aproximadamente 600 obras registradas, a MASP
        pode te ajudar a qualquer momento!
        <br />
        Entre já em contato conosco!
      </h3>
    </div>
    <div className={styles.right}>
      <img alt='raio' className={`${styles.img} ${styles.flash}`} src={raio} />
    </div>
  </section>
);

export default About;
