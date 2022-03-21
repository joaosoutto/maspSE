import React from 'react';
import Form from '../../components/form/Form';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={`sec animeLeft ${styles.section}`}>
      <div className={styles.form}>
        <Form />
      </div>
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
    </section>
  );
};

export default Contact;
