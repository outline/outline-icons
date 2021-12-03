import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function FeedbackIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4C5.79086 4 4 5.79086 4 8V14V18V18.5625C4 19.6431 5.1721 20.3163 6.10542 19.7718L9.14286 18L16 18C18.2091 18 20 16.2091 20 14V8C20 5.79086 18.2091 4 16 4H8ZM8 9C8 8.44772 8.44772 8 9 8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H9C8.44772 10 8 9.55228 8 9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H14C14.5523 14 15 13.5523 15 13C15 12.4477 14.5523 12 14 12H9Z"
      />
    </Icon>
  );
}
