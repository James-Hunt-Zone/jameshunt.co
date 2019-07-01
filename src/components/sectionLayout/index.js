import React from 'react';
import styles from './styles.module.scss';

const SectionLayout = ({ contextChildren, mainChildren, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles['section-context']}>{contextChildren}</div>
      <div className={styles['section-main']}>{mainChildren}</div>
      {children}
    </section>
  );
};

export default SectionLayout;
