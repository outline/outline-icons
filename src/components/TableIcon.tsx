import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function TableIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7C4 5.89543 4.89543 5 6 5ZM6 11H11V13H6V11ZM18 11H13V13H18V11ZM6 15H11V17H6V15ZM18 15H13V17H18V15ZM6 7H11V9H6V7ZM18 7H13V9H18V7Z"
      />
    </Icon>
  );
}

export default React.forwardRef(TableIcon);
