import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function BicycleIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5.5C15 6.32843 14.3284 7 13.5 7C12.6716 7 12 6.32843 12 5.5C12 4.67157 12.6716 4 13.5 4C14.3284 4 15 4.67157 15 5.5ZM7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20ZM17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20ZM16 12.5L12 10L10.5 12L13 14V19H11V15L8.27131 13.0509C7.83881 12.742 7.72354 12.1487 8.00888 11.7003L10.4516 7.8618C10.7526 7.38884 11.3835 7.25566 11.8499 7.56663L17 11L16 12.5Z"
      />
    </Icon>
  );
}

export default React.forwardRef(BicycleIcon);
