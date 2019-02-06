import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/html';
import { checkA11y } from '@storybook/addon-a11y';
import SectionImage from './index';

storiesOf('Section Image', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('with props', () => {
    const img = text('Img', 'British Gas');
    const alt = text('Alt', 'British Gas');

    return <SectionImage img={img} alt={alt} />;
  });