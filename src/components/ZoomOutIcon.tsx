import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ZoomOutIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M11 5C14.3137 5 17 7.68629 17 11C17 12.1126 16.6957 13.1537 16.168 14.0469L19.0605 16.9395C19.6463 17.5252 19.6463 18.4748 19.0605 19.0605C18.4748 19.6463 17.5252 19.6463 16.9395 19.0605L14.0469 16.168C13.1537 16.6957 12.1126 17 11 17C7.68629 17 5 14.3137 5 11C5 7.68629 7.68629 5 11 5ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H13C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10H9Z" />
    </Icon>
  );
}

export default React.forwardRef(ZoomOutIcon);
