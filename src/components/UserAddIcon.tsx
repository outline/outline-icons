import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function UserAddIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M18 15C18.5523 15 19 15.4477 19 16V17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V19H16C15.4477 19 15 18.5523 15 18C15 17.4477 15.4477 17 16 17H17V16C17 15.4477 17.4477 15 18 15ZM12 12C14.0794 12 15.4664 12.5195 16.3779 13.2695C14.4127 13.9432 13 15.8064 13 18C13 18.3425 13.035 18.6768 13.1006 19H8.00879C6.89951 19 6 18.1053 6 17C6.00001 15 7.00002 12 12 12ZM12 4C14.5 4 15 5.56701 15 7.5C15 9.433 14 11 12 11C10 11 9 9.433 9 7.5C9 5.56701 9.50001 4 12 4Z" />
    </Icon>
  );
}

export default React.forwardRef(UserAddIcon);
