import React from "react"
// eslint-disable-next-line
import styles from './styles.module.scss';

class ProjectBody extends React.Component {
  generateBody() {
    return <p className="project-body">{this.props.body}</p>
  }

  generateTechUsed() {
    return (<ul className="project-list">
        {this.props.tech.map((item, index) =>
          <li className="project-listItem" key={index}>
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
      <section className="section section--divider">      
        <div className="col col--span1">
          <h5 className="project-heading">{this.props.title}</h5>
        </div>
        <div className="col col--span2">
          {content}
        </div>
      </section>
    );
  }
}

export default ProjectBody;
