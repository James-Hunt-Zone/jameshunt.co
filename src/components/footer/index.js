import React from 'react';
import styles from './styles.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <section className="section">
          <ul className={styles['footer-list']}>
            <li className={styles['footer-listItem']}>
              <a
                className={styles.footerLink}
                href="https://www.linkedin.com/in/james-hunt-0852a94"
                title="Visit James Hunt's LinkedIn page"
              >
                <img
                  className={styles.footerLogo}
                  src="logo-linkedin.png"
                  alt="LinkedIn Logo"
                />
              </a>
            </li>
            <li className={styles['footer-listItem']}>
              <a
                className={styles.footerLink}
                href="https://github.com/James-Hunt-Zone"
                title="Visit James Hunt's GitHub page"
              >
                <img
                  className={styles.footerLogo}
                  src="logo-github.png"
                  alt="GitHub Logo"
                />
              </a>
            </li>
            <li className={styles['footer-listItem']}>
              <a
                className={styles.footerLink}
                href="https://medium.com/@jameshunt.co"
                title="Visit James Hunt's Medium page"
              >
                <img
                  className={styles.footerLogo}
                  src="logo-medium.png"
                  alt="Medium Logo"
                />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
