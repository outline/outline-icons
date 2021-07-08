import React from "react";
import { storiesOf } from "@storybook/react";
import * as Icons from "../index";
import ArchiveIcon from "../components/ArchiveIcon";
import CollectionIcon from "../components/CollectionIcon";
import TrashIcon from "../components/TrashIcon";

const names = Object.keys(Icons);

storiesOf("All", module)
  .add("default", () => <React.Fragment>{names.map((name) => {
    if (name === "default" || name === "Icon") return null;

    const Component = Icons[name];
    return <Component key={name} size={64} />
  })}</React.Fragment>)

for (const name of names) {
  if (name === "default") {
    continue;
  }

  const Component = Icons[name];
  storiesOf(name, module)
    .add("default", () => <Component />)
    .add("large", () => <Component size={64} />)
    .add("black", () => <Component black />)
    .add("light", () => <Component light />)
};


storiesOf("CollectionIcon", module)
  .add("expanded", () => <CollectionIcon expanded />)

storiesOf("ArchiveIcon", module)
  .add("open", () => <ArchiveIcon open />)

storiesOf("TrashIcon", module)
  .add("open", () => <TrashIcon open />)