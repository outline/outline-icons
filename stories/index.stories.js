import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import * as Icons from "../src";

const stories = storiesOf('Icon', module);
const names = Object.keys(Icons);

for (const name of names) {
  if (name === "default") {
    continue;
  }

  const Component = Icons[name];
  storiesOf(name, module)
    .addDecorator(centered)
    .add('default', () => <Component />)
    .add('large', () => <Component size={64} />)
    .add('black', () => <Component black />)
    .add('light', () => <Component light />)
};