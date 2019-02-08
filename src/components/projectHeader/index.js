import React from "react"
// eslint-disable-next-line
//import styles from './styles.module.scss';

class ProjectHeader extends React.Component {
  render() {
    return (
      <section class="section">      
        <div class="grid-item grid-item--header">
          <h2 class="section-header">{this.props.title}</h2>
        </div>
      </section>
    );
  }
}

export default ProjectHeader;
