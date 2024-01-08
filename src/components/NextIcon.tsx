import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function NextIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M9.29289322,16.2928932 C8.90236893,16.6834175 8.90236893,17.3165825 9.29289322,17.7071068 C9.68341751,18.0976311 10.3165825,18.0976311 10.7071068,17.7071068 L15.7071068,12.7071068 C16.0976311,12.3165825 16.0976311,11.6834175 15.7071068,11.2928932 L10.7071068,6.29289322 C10.3165825,5.90236893 9.68341751,5.90236893 9.29289322,6.29289322 C8.90236893,6.68341751 8.90236893,7.31658249 9.29289322,7.70710678 L13.5857864,12 L9.29289322,16.2928932 Z" />
    </Icon>
  );
}

export default React.forwardRef(NextIcon);
