import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function HomeIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M6.42359 18.083C6.46678 18.6013 6.90004 19 7.42013 19H9C9.55228 19 10 18.5523 10 18V15.5C10 14.3954 10.8954 13.5 12 13.5V13.5C13.1046 13.5 14 14.3954 14 15.5V18C14 18.5523 14.4477 19 15 19H16.5799C17.1 19 17.5332 18.6013 17.5764 18.083L18 13L18.6677 12.6661C19.3035 12.3483 19.4139 11.4872 18.879 11.0191L12.6585 5.57619C12.2815 5.24629 11.7185 5.24629 11.3415 5.57619L5.12099 11.0191C4.58605 11.4872 4.69651 12.3483 5.33228 12.6661L6 13L6.42359 18.083Z" />
    </Icon>
  );
}

export default React.forwardRef(HomeIcon);
