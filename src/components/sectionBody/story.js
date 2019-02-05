import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/html';
import SectionBody from './index';

storiesOf('Section Body', module)
  .addDecorator(withKnobs)
  .add('default', () => <SectionBody />)
  .add('default', () => {
    const title = text('Title', 'Tech used');
    const body = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare, urna sit amet varius consectetur, arcu mauris ultricies mi, sed lacinia odio est in tortor. Quisque vel turpis posuere, consequat lacus ut, maximus massa. Suspendisse ac libero ac est aliquam pellentesque id nec lectus. Suspendisse egestas tristique faucibus. Ut nunc ipsum, pretium et turpis at, mollis sagittis lacus. Pellentesque porta congue erat eget imperdiet. Sed id eros ac metus lobortis finibus eu vitae ligula. Vestibulum vulputate justo sit amet nunc lobortis, ut ultrices magna luctus. Vivamus porta erat sed iaculis sollicitudin. Nunc congue lorem vitae ex volutpat, vel porttitor nunc rutrum.');

    return <SectionBody title={title} body={body} />;
  });
