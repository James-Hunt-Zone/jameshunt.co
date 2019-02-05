import React from "react"
import styles from './styles.module.scss';

class SectionBody extends React.Component {
  render() {
    return (
      <section class="border-top border-bottom">      
        <div class="grid-item grid-item--narrow">
          <h3 class="section-title">{this.props.title}</h3>
        </div>
        <div class="grid-item grid-item--wide">
          <p class="section-body">{this.props.body}</p>
        </div>
      </section>
    );
  }
}

export default SectionBody;
