import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function TruckIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C11.4477 4 11 4.44772 11 5V13H20V6C20 4.89543 19.1046 4 18 4H12ZM4.39527 12.3083L7.71208 6.50386C7.89012 6.19229 8.22147 6 8.58032 6H10V14H20V17C20 17.5523 19.5523 18 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18H11.5C11.5 16.3431 10.1569 15 8.5 15C6.84315 15 5.5 16.3431 5.5 18L5 18C4.44772 18 4 17.5523 4 17V13.7967C4 13.2746 4.13625 12.7616 4.39527 12.3083ZM8.5 20C9.60457 20 10.5 19.1046 10.5 18C10.5 16.8954 9.60457 16 8.5 16C7.39543 16 6.5 16.8954 6.5 18C6.5 19.1046 7.39543 20 8.5 20ZM16 20C17.1046 20 18 19.1046 18 18C18 16.8954 17.1046 16 16 16C14.8954 16 14 16.8954 14 18C14 19.1046 14.8954 20 16 20Z"
      />
    </Icon>
  );
}

export default React.forwardRef(TruckIcon);
