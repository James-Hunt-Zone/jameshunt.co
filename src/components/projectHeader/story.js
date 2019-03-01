import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/html';
import { checkA11y } from '@storybook/addon-a11y';
import SectionHeader from './index';

storiesOf('Section Header', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('with props', () => {
    const title = text('Title', 'British Gas');

    return <SectionHeader title={title} />;
  });
