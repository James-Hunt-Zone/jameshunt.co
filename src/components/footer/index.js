import React from "react"
// eslint-disable-next-line
import styles from './styles.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <section class="section">      
            <ul className={styles['footer-list']}>
              <li className={styles['footer-listItem']}>
                <a className={styles.footerLink} href="https://github.com/James-Hunt-Zone" title="Visit James Hunt's GitHub page">
                  <img className={styles.footerLogo} src="logo-github.png" alt="GitHub Logo Image"></img>
                </a>
              </li>
              <li className={styles['footer-listItem']}>
                <a className={styles.footerLink} href="https://github.com/James-Hunt-Zone" title="Visit James Hunt's LinkedIn page">
                  <img className={styles.footerLogo} src="logo-linkedin.png" alt="LinkedIn Logo Image"></img>
                </a>
              </li>
            </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
