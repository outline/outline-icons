import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function BackIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M14.7071068,7.70710678 L10.4142136,12 L14.7071068,16.2928932 C15.0976311,16.6834175 15.0976311,17.3165825 14.7071068,17.7071068 C14.3165825,18.0976311 13.6834175,18.0976311 13.2928932,17.7071068 L8.29289322,12.7071068 C7.90236893,12.3165825 7.90236893,11.6834175 8.29289322,11.2928932 L13.2928932,6.29289322 C13.6834175,5.90236893 14.3165825,5.90236893 14.7071068,6.29289322 C15.0976311,6.68341751 15.0976311,7.31658249 14.7071068,7.70710678 Z" />
    </Icon>
  );
}

export default React.forwardRef(BackIcon);
