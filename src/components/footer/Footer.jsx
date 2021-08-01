import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import HelpIcon from "@material-ui/icons/Help";
import HearingIcon from "@material-ui/icons/Hearing";

import styles from "./Footer.module.css";
import FooterCard from "./FooterCard";

const Footer = () => (
  <footer className={styles.footer}>
    <FooterCard
      icon={
        <HomeIcon style={{ color: "rgb(245, 134, 52)", fontSize: "28px" }} />
      }
      path=""
      text="início"
    />
    <FooterCard
      icon={
        <AppsIcon style={{ color: "rgb(245, 134, 52)", fontSize: "28px" }} />
      }
      path="servicos"
      text="serviços"
    />
    <FooterCard
      icon={
        <HelpIcon style={{ color: "rgb(245, 134, 52)", fontSize: "28px" }} />
      }
      path="sobre"
      text="sobre"
    />
    <FooterCard
      icon={
        <HearingIcon style={{ color: "rgb(245, 134, 52)", fontSize: "28px" }} />
      }
      path="contato"
      text="contato"
    />
  </footer>
);

export default Footer;
