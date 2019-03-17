import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Icons from "../src";

const stories = storiesOf('Icon', module);
const names = Object.keys(Icons);

for (const name of names) {
  const Component = Icons[name];
  stories.add(name, () => <Component />);
};