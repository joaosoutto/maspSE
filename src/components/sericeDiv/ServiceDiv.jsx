import React from 'react';

import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import FlashOffOutlinedIcon from '@material-ui/icons/FlashOffOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import BatteryChargingFullOutlinedIcon from '@material-ui/icons/BatteryChargingFullOutlined';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import styles from './ServiceDiv.module.css';

const ServiceDiv = () => (
  <div className={styles.services}>
    <div className={styles.inner}>
      <div className={styles.service}>
        <OfflineBoltOutlinedIcon style={{ fontSize: 42, margin: 0 }} />
        <p style={{ margin: '10px 0' }}>Inspeções elétricas</p>
      </div>
      <div className={styles.service}>
        <FlashOffOutlinedIcon style={{ fontSize: 42, margin: 0 }} />
        <p style={{ margin: '10px 0' }}>Aterramentos elétricos</p>
      </div>
      <div className={styles.service}>
        <BatteryChargingFullOutlinedIcon style={{ fontSize: 42, margin: 0 }} />
        <p style={{ margin: '10px 0' }}>Grupo gerador</p>
      </div>
    </div>
    <div className={styles.inner}>
      <div className={styles.service}>
        <AccountTreeOutlinedIcon style={{ fontSize: 42, margin: 0 }} />
        <p style={{ margin: '10px 0' }}>Elaboração de projetos elétricos</p>
      </div>
      <div className={styles.service}>
        <SupervisorAccountOutlinedIcon style={{ fontSize: 42, margin: 0 }} />
        <p style={{ margin: '10px 0' }}>
          Treinamentos das Normas Regulamentadoras - NR's
        </p>
      </div>
      <div className={styles.service}>
        <FlashOnIcon style={{ fontSize: 42, margin: 0 }} />
        <p style={{ margin: '10px 0' }}>Para-raio</p>
      </div>
    </div>
  </div>
);

export default ServiceDiv;
