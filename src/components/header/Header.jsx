import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../assets/masp_logo.png';
import newLogo from '../../assets/30.jpeg';

const Header = () => (
  <header className={styles.header}>
    <Link to='/'>
      <img className={styles.logo} src={newLogo} alt='MASP logo' />
    </Link>
    <nav>
      <Link className={styles.link} to='/'>
        <p>Início</p>
      </Link>
      <Link className={styles.link} to='/servicos'>
        <p>Serviços</p>
      </Link>
      <Link className={styles.link} to='/clientes'>
        <p>Clientes</p>
      </Link>
      <Link className={styles.link} to='/sobre'>
        <p>Quem Somos</p>
      </Link>
      <Link className={styles.link} to='/contato'>
        <p>Fale Conosco</p>
      </Link>
    </nav>
  </header>
);

export default Header;
