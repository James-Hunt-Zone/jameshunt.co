import React from "react"
import styles from './styles.module.scss';

class SectionBody extends React.Component {
  generateBody() {
    return <p class="section-body">{this.props.body}</p>
  }

  generateTechUsed() {
    return (<ul class="section-techList">
        {this.props.tech.map((item, index) =>
          <li class="section-techListItem" key={index}>
            {item}
          </li>
        )}
      </ul>
    );
  }

  render() {
    let content;

    if (this.props.type === 'body') {
      content = this.generateBody();
    } else {
      content = this.generateTechUsed();
    }

    return (
      <section class="section border-top border-bottom">      
        <div class="grid-item grid-item--1of3">
          <h3 class="section-title">{this.props.title}</h3>
        </div>
        <div class="grid-item grid-item--2of3">
          {content}
        </div>
      </section>
    );
  }
}

export default SectionBody;
