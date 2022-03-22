import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import ServiceDiv from '../../components/sericeDiv/ServiceDiv';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Home = () => (
  <section className='sec animeLeft'>
    <div className={styles.content}>
      <div className={styles.middle}>
        <h3>
          A <span>MASP</span> poderá desenvolver a solução necessária que sua
          empresa precisa. Com 30 anos de mercado, possuímos aproximadamente 600
          obras registradas! Conheça mais dos nossos serviços{' '}
          <Link className={styles.link} to='/servicos'>
            <span>clicando aqui.</span>
          </Link>
        </h3>
      </div>

      <ServiceDiv />
      <div className={styles.foot}>
        <div className={styles.contacts}>
          <p>
            {' '}
            <WhatsAppIcon style={{ fontSize: 28, marginRight: 8 }} />
            (31) 9 8013-5034
          </p>
          <p>
            {' '}
            <PhoneIcon style={{ fontSize: 28, marginRight: 8 }} />
            (31) 3466-9966
          </p>
          <p>
            {' '}
            <MailOutlineIcon style={{ fontSize: 28, marginRight: 8 }} />
            masp.comercial@gmail.com
          </p>
        </div>
        <p className={styles.end}>
          Rua Naná Kubitschek Soares, 82 Bairro Alvorada - Sabará-MG CEP
          34700-160
        </p>
        <div className={styles.rights}>
          © 2022 Masp Soluções Elétricas - Todos os direitos reservados.
        </div>
      </div>
    </div>
  </section>
);

export default Home;
