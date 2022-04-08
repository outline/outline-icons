import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function CalendarIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM18 8H6V18H18V8Z"
      />
      <rect x="6.5" y="15" width="2" height="2" rx="1" />
      <rect x="9.5" y="15" width="2" height="2" rx="1" />
      <rect x="12.5" y="15" width="2" height="2" rx="1" />
      <rect x="6.5" y="12" width="2" height="2" rx="1" />
      <rect x="9.5" y="12" width="2" height="2" rx="1" />
      <rect x="12.5" y="12" width="2" height="2" rx="1" />
      <rect x="9.5" y="9" width="2" height="2" rx="1" />
      <rect x="12.5" y="9" width="2" height="2" rx="1" />
      <rect x="15.5" y="12" width="2" height="2" rx="1" />
      <rect x="15.5" y="9" width="2" height="2" rx="1" />
    </Icon>
  );
}
