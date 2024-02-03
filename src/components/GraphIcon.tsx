import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function GraphIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M4 16.118C4 15.7393 4.214 15.393 4.55279 15.2236L8 13.5L8 20H4V16.118Z" />
      <path d="M10 12.5L14 9.5V20H10V12.5Z" />
      <path d="M16 8L18.2191 5.22609C18.8096 4.48795 20 4.9055 20 5.85078V20H16V8Z" />
    </Icon>
  );
}

export default React.forwardRef(GraphIcon);
