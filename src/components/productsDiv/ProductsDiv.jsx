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
        <span className={styles.arrow}>{`>`}</span> O prontuário de NR-10 (Norma
        Regulamentadora NR-10), consiste no levantamento do sistema elétrico,
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
        name='Elaboração e Coordenação de Projetos Elétricos'
        icon={<BuildOutlinedIcon fontSize='large' style={{ fontSize: 46 }} />}
      />
      <p className={styles.description}>
        <span className={styles.arrow}>{`>`}</span> Conte conosco para a
        elaboração e coordenação de seus Projetos Elétricos.
      </p>
      <ProductsCards
        name='Treinamentos das Normas Regulamentadoras'
        icon={
          <SupervisorAccountOutlinedIcon
            fontSize='large'
            style={{ fontSize: 46 }}
          />
        }
      />
      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 05 - COMISSÃO INTERNA DE
        PREVENÇÃO DE ACIDENTES - CIPA
      </p>
      <p className={styles.nr}>
        Treinamento presencial para membros e designados CIPA – Carga horária:
        20:00hs
      </p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 06 – EQUIPAMENTO DE
        PROTEÇÃO INDIVIDUAL - EPI
      </p>
      <p className={styles.nr}>
        Treinamento presencial – Carga horária: 04:00hs
      </p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 10 - SEGURANÇA EM
        INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE
      </p>
      <p className={styles.nr}>
        Curso Básico - Treinamento presencial - Carga horária: 40:00hs
      </p>
      <p className={styles.nr}>
        Curso Reciclagem – Treinamento presencial – Carga Horária: 08:00hs ou
        04:00hs
      </p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> SEP - CURSO COMPLEMENTAR -
        SEGURANÇA NO SISTEMA ELÉTRICO DE POTÊNCIA E EM SUAS PROXIMIDADES.
      </p>
      <p className={styles.nr}>
        Curso Complementar - Treinamento presencial - Carga horária: 40:00hs
      </p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 12 - SEGURANÇA NO
        TRABALHO EM MÁQUINAS E EQUIPAMENTOS
      </p>
      <p className={styles.nr}>Treinamento presencial - Carga Horária 8:00hs</p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 17 – ERGONOMIA
      </p>
      <p className={styles.nr}>Treinamento presencial - Carga Horária 8:00hs</p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 18 – SEGURANÇA E SAÚDE NO
        TRABALHO NA INDÚSTRIA DA CONSTRUÇÃO
      </p>
      <p className={styles.nr}>Treinamento presencial - Carga Horária 4:00hs</p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 24 - Condições Sanitárias
        e de Conforto nos Locais de Trabalho
      </p>
      <p className={styles.nr}>Treinamento presencial - Carga Horária 4:00hs</p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 26 - Sinalização de
        Segurança
      </p>
      <p className={styles.nr}>Treinamento presencial - Carga Horária 4:00hs</p>
      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 33 - SEGURANÇA E SAÚDE
        NOS TRABALHOS EM ESPAÇOS CONFINADOS
      </p>
      <p className={styles.nr}>
        Capacitação inicial - Treinamento presencial - Carga Horária 16:00hs
      </p>
      <p className={styles.nr}>
        Capacitação periódica - Treinamento presencial - Carga Horária 08:00hs
      </p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> NR 35 - TRABALHO EM ALTURA
      </p>
      <p className={styles.nr}>
        Treinamento presencial - Carga Horária 08:00hs
      </p>

      <p className={styles.descriptionNR}>
        <span className={styles.arrow}>{`>`}</span> PRIMEIROS SOCORROS
      </p>
      <p className={styles.nr}>
        Treinamento presencial - Carga Horária 20:00hs
      </p>
    </div>
  </div>
);

export default ProductsDiv;
