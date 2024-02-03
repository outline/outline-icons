import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function VehicleIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 17V13.3198C4 12.8431 4.33646 12.4327 4.80388 12.3392L6.5 12L9.25667 4.64888C9.40304 4.25857 9.77616 4 10.193 4H16.307C16.7238 4 17.097 4.25857 17.2433 4.64888L20 12V17C20 17.5523 19.5523 18 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18H11.5C11.5 16.3431 10.1569 15 8.5 15C6.84315 15 5.5 16.3431 5.5 18H5C4.44772 18 4 17.5523 4 17ZM15 6V12H18L16 6H15ZM8.5 12L10.5 6H13V12H8.5ZM10.5 18C10.5 19.1046 9.60457 20 8.5 20C7.39543 20 6.5 19.1046 6.5 18C6.5 16.8954 7.39543 16 8.5 16C9.60457 16 10.5 16.8954 10.5 18ZM18 18C18 19.1046 17.1046 20 16 20C14.8954 20 14 19.1046 14 18C14 16.8954 14.8954 16 16 16C17.1046 16 18 16.8954 18 18Z"
      />
    </Icon>
  );
}

export default React.forwardRef(VehicleIcon);
