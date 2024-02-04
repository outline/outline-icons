import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function GraphIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M4 15C4 14.4477 4.44772 14 5 14H7C7.55228 14 8 14.4477 8 15V19C8 19.5523 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V15Z" />
      <path d="M16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V11Z" />
      <path d="M10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V5Z" />
    </Icon>
  );
}

export default React.forwardRef(GraphIcon);
