import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/html';
import { checkA11y } from '@storybook/addon-a11y';
import Footer from './index';

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('default', () => {
    return <Footer />;
  });
