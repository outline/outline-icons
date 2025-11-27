import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function TableColumnsDistributeIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M18 9C19.1046 9 20 9.89543 20 11V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V11C4 9.89543 4.89543 9 6 9H18ZM6 17H11V15H6V17ZM13 15V17H18V15H13ZM6 13H11V11H6V13ZM13 13H18V11H13V13Z" />
      <path d="M5.5 5V6H11.5V5H12.5V6H18.5V5H19.5V6H20V7H19.5V8H18.5V7H12.5V8H11.5V7H5.5V8H4.5V7H4V6H4.5V5H5.5Z" />
    </Icon>
  );
}

export default React.forwardRef(TableColumnsDistributeIcon);
