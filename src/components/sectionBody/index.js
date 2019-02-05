import React from "react"
import styles from './styles.module.scss';

class SectionBody extends React.Component {
    render() {
      return (
        <section>      
          <div class="grid-item grid-item--narrow">
            <h3>Info</h3>
          </div>
          <div class="grid-item grid-item--wide">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare, urna sit amet varius consectetur, arcu mauris ultricies mi, sed lacinia odio est in tortor. Quisque vel turpis posuere, consequat lacus ut, maximus massa. Suspendisse ac libero ac est aliquam pellentesque id nec lectus. Suspendisse egestas tristique faucibus. Ut nunc ipsum, pretium et turpis at, mollis sagittis lacus. Pellentesque porta congue erat eget imperdiet. Sed id eros ac metus lobortis finibus eu vitae ligula. Vestibulum vulputate justo sit amet nunc lobortis, ut ultrices magna luctus. Vivamus porta erat sed iaculis sollicitudin. Nunc congue lorem vitae ex volutpat, vel porttitor nunc rutrum.</p>
          </div>
        </section>
      );
    }
  }

  export default SectionBody;
