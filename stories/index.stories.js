import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import * as Icons from "../src";

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

storiesOf("all", module)
  .addDecorator(centered)
  .add('default', () => <React.Fragment>{names.map((name) => {
    if (name === "default") return null;

    const Component = Icons[name];
    return <Component key={name} size={64} />
  })}</React.Fragment>)