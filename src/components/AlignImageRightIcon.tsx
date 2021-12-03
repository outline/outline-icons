import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function AlignImageRightIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 10C4 9.44772 4.44772 9 5 9H12V11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H12V15H5C4.44772 15 4 14.5523 4 14ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5ZM15 9C14.4477 9 14 9.44772 14 10V14C14 14.5523 14.4477 15 15 15H19C19.5523 15 20 14.5523 20 14V10C20 9.44772 19.5523 9 19 9H15Z"
      />
    </Icon>
  );
}
