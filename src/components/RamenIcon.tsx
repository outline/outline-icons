import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function RamenIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M13.7222 20H10.2778C9.72549 20 9.27778 19.5523 9.27778 19V18C9.27778 18 5 16 5 10H19C19 16 14.7222 18 14.7222 18V19C14.7222 19.5523 14.2745 20 13.7222 20Z" />
      <path d="M7.33996 5.51289C6.79479 5.60128 6.4245 6.11487 6.51289 6.66004C6.60128 7.20521 7.11487 7.5755 7.66004 7.48711L7.33996 5.51289ZM7.66004 7.48711L23.008 4.99874L22.6879 3.02452L7.33996 5.51289L7.66004 7.48711Z" />
      <path d="M10 7C9.44772 7 9 7.44772 9 8C9 8.55228 9.44772 9 10 9V7ZM10 9H23.1529V7H10V9Z" />
    </Icon>
  );
}

export default React.forwardRef(RamenIcon);
