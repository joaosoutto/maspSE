import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import HelpIcon from "@material-ui/icons/Help";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

import styles from "./Footer.module.css";
import FooterCard from "./FooterCard";

const Footer = () => (
  <footer className={styles.footer}>
    <FooterCard
      icon={
        <HomeIcon style={{ color: "rgb(245, 134, 52)", fontSize: "24px" }} />
      }
      path=""
      text="início"
    />
    <FooterCard
      icon={
        <AppsIcon style={{ color: "rgb(245, 134, 52)", fontSize: "24px" }} />
      }
      path="servicos"
      text="serviços"
    />
    <FooterCard
      icon={
        <PeopleAltIcon
          style={{ color: "rgb(245, 134, 52)", fontSize: "24px" }}
        />
      }
      path="clientes"
      text="clientes"
    />
    <FooterCard
      icon={
        <HelpIcon style={{ color: "rgb(245, 134, 52)", fontSize: "24px" }} />
      }
      path="sobre"
      text="sobre"
    />
    <FooterCard
      icon={
        <HeadsetMicIcon
          style={{ color: "rgb(245, 134, 52)", fontSize: "24px" }}
        />
      }
      path="contato"
      text="contato"
    />
  </footer>
);

export default Footer;
