import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function TableHeaderColumnIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7C4 5.89543 4.89543 5 6 5ZM13 7H18V9H13V7ZM18 15H13V17H18V15ZM13 11H18V13H13V11ZM11 7H6V17H11V7Z"
      />
    </Icon>
  );
}

export default React.forwardRef(TableHeaderColumnIcon);
