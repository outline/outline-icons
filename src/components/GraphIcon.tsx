import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function GraphIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4C5.55228 4 6 4.44772 6 5V18H19C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H6C4.89543 20 4 19.1046 4 18V5C4 4.44772 4.44772 4 5 4Z"
      />
      <path d="M7 13H10V17H7V13Z" />
      <path d="M11 9H14V17H11V9Z" />
      <path d="M15 5H18V17H15V5Z" />
    </Icon>
  );
}

export default React.forwardRef(GraphIcon);
