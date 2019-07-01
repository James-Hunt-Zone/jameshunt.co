import React from 'react';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>James Hunt</h1>
      <h2 className={styles.h2}>Senior Frontend Developer</h2>
    </header>
  );
};

export default Header;
