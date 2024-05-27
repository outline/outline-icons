import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function TableHeaderRowIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7C20 5.89543 19.1046 5 18 5ZM11 11H6V13H11V11ZM13 11H18V13H13V11ZM18 7H6V9H18V7ZM6 15H11V17H6V15ZM18 15H13V17H18V15Z"
      />
    </Icon>
  );
}

export default React.forwardRef(TableHeaderRowIcon);
