import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ImageIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M19,14.5857864 L13.7071068,9.29289322 C13.3165825,8.90236893 12.6834175,8.90236893 12.2928932,9.29289322 L8,13.5857864 L5,10.5857864 L5,7 L5,7 C5,5.8954305 5.8954305,5 7,5 L7,5 L17,5 L17,5 C18.1045695,5 19,5.8954305 19,7 L19,14.5857864 Z M18.9642423,17.3784559 C18.7873485,18.3020643 17.9751801,19 17,19 L7,19 L7,19 C5.8954305,19 5,18.1045695 5,17 L5,13.4142136 L7.29289322,15.7071068 C7.68341751,16.0976311 8.31658249,16.0976311 8.70710678,15.7071068 L13,11.4142136 L18.9642423,17.3784559 Z M8.5,10 C9.32842712,10 10,9.32842712 10,8.5 C10,7.67157288 9.32842712,7 8.5,7 C7.67157288,7 7,7.67157288 7,8.5 C7,9.32842712 7.67157288,10 8.5,10 Z" />
    </Icon>
  );
}

export default React.forwardRef(ImageIcon);
