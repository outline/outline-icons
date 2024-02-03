import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function WarningIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15ZM12 14C13 14 13 13 13 13L13 10.5L13 8C13 8 13 7 12 7C11 7 11 8 11 8L11 13C11 13 11 14 12 14Z"
      />
    </Icon>
  );
}

export default React.forwardRef(WarningIcon);
