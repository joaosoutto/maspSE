import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Footer.module.css";

const FooterCard = ({ icon, text, path }) => {
  const history = useHistory();
  return (
    <div className={styles.card} onClick={() => history.push(`/${path}`)}>
      {icon}
      <p style={{ fontSize: 16 }}>{text}</p>
    </div>
  );
};

export default FooterCard;
