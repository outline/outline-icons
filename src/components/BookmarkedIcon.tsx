import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function BookmarkedIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4C6.89543 4 6 4.89543 6 6V19C6 19.3603 6.19379 19.6927 6.5073 19.8702C6.82081 20.0477 7.20557 20.0429 7.5145 19.8575L12 17.1662L16.4855 19.8575C16.7944 20.0429 17.1792 20.0477 17.4927 19.8702C17.8062 19.6927 18 19.3603 18 19V6C18 4.89543 17.1046 4 16 4H8Z"
      />
    </Icon>
  );
}
