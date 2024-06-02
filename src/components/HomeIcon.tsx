import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function HomeIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 18C6.5 18.5523 6.94772 19 7.5 19H9C9.55228 19 10 18.5523 10 18V15.5C10 14.3954 10.8954 13.5 12 13.5V13.5C13.1046 13.5 14 14.3954 14 15.5V18C14 18.5523 14.4477 19 15 19H16.5C17.0523 19 17.5 18.5523 17.5 18V12H18.0855C19.0376 12 19.451 10.7952 18.6994 10.2106L12.6139 5.47751C12.2528 5.19665 11.7472 5.19665 11.3861 5.47751L5.30059 10.2106C4.54901 10.7952 4.96238 12 5.91454 12H6.5V18Z"
      />
    </Icon>
  );
}

export default React.forwardRef(HomeIcon);
