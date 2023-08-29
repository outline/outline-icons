import React from "react";
import * as Icons from "../index";

// Define an index signature for Icons
type IconType = { [key: string]: React.ComponentType<any> };
const TypedIcons = Icons as IconType;

const names = Object.keys(TypedIcons);

export default {
  title: "Icons",
};

export const Dark = () => (
  <>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {names.map((name) => {
        if (name === "default" || name === "Icon") return null;
        const Component = TypedIcons[name];
        return (
          <div key={name} style={{ margin: "10px", textAlign: "center" }}>
            <Component size={64} />
            <div
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                fontSize: "14px",
                opacity: "50%",
              }}
            >
              {name}
            </div>
          </div>
        );
      })}
    </div>
  </>
);

export const Light = () => (
  <>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {names.map((name) => {
        if (name === "default" || name === "Icon") return null;
        const Component = TypedIcons[name];
        return (
          <div key={name} style={{ margin: "10px", textAlign: "center" }}>
            <Component color="#FFF" size={64} />
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                opacity: "50%",
                color: "#fff",
              }}
            >
              {name}
            </div>
          </div>
        );
      })}
    </div>
  </>
);

Light.parameters = {
  backgrounds: { default: "dark" },
};

export const CollectionExpanded = {
  render: () => <Icons.CollectionIcon expanded size={64} />,
  parameters: {
    docs: {
      storyDescription: "CollectionIcon expanded",
    },
  },
};

export const DocumentOutline = {
  render: () => <Icons.DocumentIcon outline size={64} />,
  parameters: {
    docs: {
      storyDescription: "DocumentIcon outline",
    },
  },
};

export const ArchiveOpen = {
  render: () => <Icons.ArchiveIcon open size={64} />,
  parameters: {
    docs: {
      storyDescription: "ArchiveIcon open",
    },
  },
};

export const TrashOpen = {
  render: () => <Icons.TrashIcon open size={64} />,
  parameters: {
    docs: {
      storyDescription: "TrashIcon open",
    },
  },
};
