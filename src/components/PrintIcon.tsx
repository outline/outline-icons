import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function PrintIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V8H19C19.5523 8 20 8.44772 20 9V15C20 15.5523 19.5523 16 19 16H17V19C17 19.5523 16.5523 20 16 20H8C7.44772 20 7 19.5523 7 19V16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H7V5ZM9 8H15V6H9V8ZM9 16V18H15V16V14H9V16Z"
      />
    </Icon>
  );
}

export default React.forwardRef(PrintIcon);
