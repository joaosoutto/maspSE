import React from "react";
import ProductsCards from "../products/ProductsCards";

import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import FlashOffOutlinedIcon from "@material-ui/icons/FlashOffOutlined";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import BatteryChargingFullOutlinedIcon from "@material-ui/icons/BatteryChargingFullOutlined";

import styles from "./ProductsDiv.module.css";

const ProductsDiv = () => (
  <div className={styles.atuation}>
    <div className={styles.items}>
      <ProductsCards
        name="Prontuários NR-10"
        icon={
          <OfflineBoltOutlinedIcon fontSize="large" style={{ fontSize: 54 }} />
        }
      />
      <ProductsCards
        name="Laudos de SPDA"
        icon={
          <FeaturedPlayListOutlinedIcon
            fontSize="large"
            style={{ fontSize: 54 }}
          />
        }
      />
      <ProductsCards
        name="Aterramentos Elétricos"
        icon={
          <FlashOffOutlinedIcon fontSize="large" style={{ fontSize: 54 }} />
        }
      />
      <ProductsCards
        name="Manutenção em Grupos Geradores"
        icon={
          <BatteryChargingFullOutlinedIcon
            fontSize="large"
            style={{ fontSize: 54 }}
          />
        }
      />
      <ProductsCards
        name="Estudos de Viabilidade"
        icon={
          <BeenhereOutlinedIcon fontSize="large" style={{ fontSize: 54 }} />
        }
      />
      <ProductsCards
        name="Treinamentos das Normas Reguladoras"
        icon={
          <SupervisorAccountOutlinedIcon
            fontSize="large"
            style={{ fontSize: 54 }}
          />
        }
      />
      <ProductsCards
        name="Relatórios Técnicos de Instalações"
        icon={
          <EmojiObjectsOutlinedIcon fontSize="large" style={{ fontSize: 54 }} />
        }
      />
      <ProductsCards
        name="Elaboração de Projetos Elétricos para Canteiro de Obras"
        icon={
          <AccountTreeOutlinedIcon fontSize="large" style={{ fontSize: 54 }} />
        }
      />
      <ProductsCards
        name="Elaboração, Coordenação e Execução de Projetos Elétricos"
        icon={<BuildOutlinedIcon fontSize="large" style={{ fontSize: 54 }} />}
      />
    </div>
  </div>
);

export default ProductsDiv;
