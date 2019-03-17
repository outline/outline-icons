import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Icons from "../src";

const stories = storiesOf('Icon', module);
const names = Object.keys(Icons);

for (const name of names) {
  const Component = Icons[name];
  storiesOf(name, module)
    .add('default', () => <Component />)
    .add('large', () => <Component size={64} />)
    .add('black', () => <Component black />)
    .add('light', () => <Component light />)
};