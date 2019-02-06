import React from "react"
import styles from './styles.module.scss';
//import { withPrefix } from 'gatsby';

class SectionImage extends React.Component {
  render() {
    return (
      <section class="section">      
        <img src={withPrefix('/img/logo.png')} />
      </section>
    );
  }
}

export default SectionImage;
