import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function SidebarIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 20C18.1046 20 19 19.1046 19 18L19 6C19 4.89543 18.1046 4 17 4L7 4C5.89543 4 5 4.89543 5 6L5 18C5 19.1046 5.89543 20 7 20L17 20ZM16.5 18C16.7761 18 17 17.7761 17 17.5L17 6.5C17 6.22386 16.7761 6 16.5 6L7.5 6C7.22386 6 7 6.22386 7 6.5L7 17.5C7 17.7761 7.22386 18 7.5 18L16.5 18Z"
      />
      <rect x="8" y="7" width="3" height="10" rx="1" />
    </Icon>
  );
}

export default React.forwardRef(SidebarIcon);
