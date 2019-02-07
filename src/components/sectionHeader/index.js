import React from "react"
// eslint-disable-next-line
import styles from './styles.module.scss';

class SectionHeader extends React.Component {
  render() {
    return (
      <section class="section border-bottom">      
        <div class="grid-item grid-item--header">
          <h2 class="section-header">{this.props.title}</h2>
        </div>
      </section>
    );
  }
}

export default SectionHeader;
