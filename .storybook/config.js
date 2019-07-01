import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

const req = require.context('../stories', true, /\.stories\.js$/);

addDecorator(withA11y);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
