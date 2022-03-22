import React from 'react';
import ProductsCards from '../products/ProductsCards';

import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import FlashOffOutlinedIcon from '@material-ui/icons/FlashOffOutlined';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import BatteryChargingFullOutlinedIcon from '@material-ui/icons/BatteryChargingFullOutlined';

import styles from './ProductsDiv.module.css';

const ProductsDiv = () => (
  <div className={styles.atuation}>
    <div className={styles.items}>
      <ProductsCards
        name='Prontuários NR-10'
        icon={
          <OfflineBoltOutlinedIcon fontSize='large' style={{ fontSize: 46 }} />
        }
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Conhecida como Norma
        Regulamentadora NR10, consiste no levantamento do sistema elétrico,
        definição dos procedimentos de segurança em eletricidade e elaboração da
        documentação.
      </p>
      <ProductsCards
        name='Laudos de SPDA'
        icon={
          <FeaturedPlayListOutlinedIcon
            fontSize='large'
            style={{ fontSize: 46 }}
          />
        }
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Suporte técnico na
        instalação, ensaios, inspeção final e laudo do SPDA, Sistema de Proteção
        Contra Descargas Atmosféricas.
      </p>
      <ProductsCards
        name='Aterramentos Elétricos'
        icon={
          <FlashOffOutlinedIcon fontSize='large' style={{ fontSize: 46 }} />
        }
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Instalação, suporte técnico,
        ensaios e laudo.
      </p>
      <ProductsCards
        name='Instalação e Manutenção em Grupos Gerador'
        icon={
          <BatteryChargingFullOutlinedIcon
            fontSize='large'
            style={{ fontSize: 46 }}
          />
        }
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Modernização e automação, a
        diesel e gasolina, chaves de transferência.
      </p>
      <ProductsCards
        name='Estudos de Viabilidade'
        icon={
          <BeenhereOutlinedIcon fontSize='large' style={{ fontSize: 46 }} />
        }
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Estudos de viabilidade
        técnica e econômica no desenvolvimento de projetos, bem como
        compatilização de sistemas elétricos e eletromecânicos, em conformidade
        com as normas técnicas e regulamentadoras.
      </p>
      <ProductsCards
        name='Treinamentos das Normas Reguladoras'
        icon={
          <SupervisorAccountOutlinedIcon
            fontSize='large'
            style={{ fontSize: 46 }}
          />
        }
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Treinamentos com base nas
        NR's.
      </p>
      <ProductsCards
        name='Laudos e Relatórios Técnicos de Instalações'
        icon={
          <EmojiObjectsOutlinedIcon fontSize='large' style={{ fontSize: 46 }} />
        }
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Diagnóstico das instalações
        elétricas, para atender os requisitos das normas técnicas de baixa e
        média tensão.
      </p>
      <ProductsCards
        name='Elaboração de Projetos Elétricos para Canteiro de Obras'
        icon={
          <AccountTreeOutlinedIcon fontSize='large' style={{ fontSize: 46 }} />
        }
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Elaboração de projetos com
        levantamento em campo, para adequação das NR-18 e NR-10.
      </p>
      <ProductsCards
        name='Elaboração, Coordenação e Execução de Projetos Elétricos'
        icon={<BuildOutlinedIcon fontSize='large' style={{ fontSize: 46 }} />}
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Conte conosco em todos os
        passos do processo do seu Projeto Elétrico. Desde a elaboração até a
        execução.
      </p>
    </div>
  </div>
);

export default ProductsDiv;
